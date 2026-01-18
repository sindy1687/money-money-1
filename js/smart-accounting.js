// 智慧記帳功能模組
// 自動分類建議和支出模式分析

// 分類規則配置
const CATEGORY_RULES = {
    // 飲食類
    '飲食': {
        keywords: ['餐廳', '小吃', '咖啡', '飲料', '午餐', '晚餐', '早餐', '外送', 'Uber Eats', 'Foodpanda', '麥當勞', '肯德基', '星巴克', '85度C', '超商', '7-11', '全家'],
        amountRanges: [
            { min: 0, max: 200, weight: 0.8 },  // 小額飲食
            { min: 200, max: 1000, weight: 0.9 } // 中等金額飲食
        ],
        timePatterns: {
            morning: { start: 6, end: 10, weight: 0.7 },
            noon: { start: 11, end: 14, weight: 0.9 },
            evening: { start: 17, end: 21, weight: 0.8 }
        }
    },
    
    // 交通類
    '交通': {
        keywords: ['捷運', '公車', '計程車', 'Uber', 'Grab', '油錢', '停車', '高鐵', '台鐵', '機票', '船票', '共享單車', 'YouBike'],
        amountRanges: [
            { min: 0, max: 100, weight: 0.8 },  // 大眾運輸
            { min: 100, max: 500, weight: 0.7 }, // 短程交通
            { min: 500, max: 5000, weight: 0.9 }  // 長程交通
        ]
    },
    
    // 娛樂類
    '娛樂': {
        keywords: ['電影', 'KTV', '遊戲', '音樂', '演唱會', '展覽', '書籍', 'Netflix', 'Spotify', 'Steam', 'PlayStation', 'Nintendo'],
        amountRanges: [
            { min: 0, max: 300, weight: 0.7 },
            { min: 300, max: 2000, weight: 0.8 }
        ]
    },
    
    // 購物類
    '購物': {
        keywords: ['衣服', '鞋子', '包包', '化妝品', '3C', '電腦', '手機', '家具', '日用品', '寵物', '運動用品'],
        amountRanges: [
            { min: 0, max: 500, weight: 0.6 },
            { min: 500, max: 5000, weight: 0.8 },
            { min: 5000, max: 50000, weight: 0.9 }
        ]
    },
    
    // 醫療類
    '醫療': {
        keywords: ['醫院', '診所', '藥局', '看醫生', '掛號', '藥品', '健保', '牙醫', '眼科', '身體檢查'],
        amountRanges: [
            { min: 0, max: 1000, weight: 0.8 },
            { min: 1000, max: 10000, weight: 0.9 }
        ]
    },
    
    // 教育類
    '教育': {
        keywords: ['學費', '補習', '書本', '課程', '學習', '證照', '工作坊', '線上課程', 'Coursera', 'Udemy'],
        amountRanges: [
            { min: 0, max: 2000, weight: 0.7 },
            { min: 2000, max: 50000, weight: 0.9 }
        ]
    },
    
    // 帳費類
    '帳費': {
        keywords: ['電費', '水費', '瓦斯費', '網路費', '手機費', '房租', '管理費', '保險', '稅金', '信用卡費'],
        amountRanges: [
            { min: 0, max: 2000, weight: 0.8 },
            { min: 2000, max: 100000, weight: 0.9 }
        ]
    }
};

// 自動分類建議功能
function suggestCategory(amount, description = '', timeOfDay = null) {
    if (!amount || amount <= 0) {
        return null;
    }
    
    const scores = {};
    const hour = timeOfDay || new Date().getHours();
    
    // 計算每個分類的匹配分數
    Object.keys(CATEGORY_RULES).forEach(category => {
        const rules = CATEGORY_RULES[category];
        let score = 0;
        let factors = [];
        
        // 1. 關鍵字匹配 (權重: 40%)
        if (description) {
            const keywordScore = calculateKeywordScore(description, rules.keywords);
            score += keywordScore * 0.4;
            if (keywordScore > 0) {
                factors.push(`關鍵字: ${Math.round(keywordScore * 100)}%`);
            }
        }
        
        // 2. 金額範圍匹配 (權重: 35%)
        const amountScore = calculateAmountScore(amount, rules.amountRanges);
        score += amountScore * 0.35;
        if (amountScore > 0) {
            factors.push(`金額: ${Math.round(amountScore * 100)}%`);
        }
        
        // 3. 時間模式匹配 (權重: 25%)
        if (rules.timePatterns) {
            const timeScore = calculateTimeScore(hour, rules.timePatterns);
            score += timeScore * 0.25;
            if (timeScore > 0) {
                factors.push(`時間: ${Math.round(timeScore * 100)}%`);
            }
        }
        
        if (score > 0.3) { // 最低門檻
            scores[category] = {
                score: score,
                factors: factors
            };
        }
    });
    
    // 排序並返回最佳建議
    const sortedCategories = Object.entries(scores)
        .sort(([,a], [,b]) => b.score - a.score)
        .slice(0, 3); // 取前3個建議
    
    if (sortedCategories.length === 0) {
        return null;
    }
    
    return {
        primary: sortedCategories[0][0],
        confidence: Math.round(sortedCategories[0][1].score * 100),
        factors: sortedCategories[0][1].factors,
        alternatives: sortedCategories.slice(1).map(([cat]) => cat)
    };
}

// 計算關鍵字匹配分數
function calculateKeywordScore(description, keywords) {
    if (!description || !keywords || keywords.length === 0) {
        return 0;
    }
    
    const desc = description.toLowerCase();
    let matchCount = 0;
    
    keywords.forEach(keyword => {
        if (desc.includes(keyword.toLowerCase())) {
            matchCount++;
        }
    });
    
    return Math.min(matchCount / keywords.length, 1);
}

// 計算金額範圍匹配分數
function calculateAmountScore(amount, ranges) {
    if (!ranges || ranges.length === 0) {
        return 0;
    }
    
    let maxScore = 0;
    ranges.forEach(range => {
        if (amount >= range.min && amount <= range.max) {
            maxScore = Math.max(maxScore, range.weight);
        }
    });
    
    return maxScore;
}

// 計算時間模式匹配分數
function calculateTimeScore(hour, patterns) {
    if (!patterns) {
        return 0;
    }
    
    let maxScore = 0;
    Object.values(patterns).forEach(pattern => {
        if (hour >= pattern.start && hour <= pattern.end) {
            maxScore = Math.max(maxScore, pattern.weight);
        }
    });
    
    return maxScore;
}

// 支出模式分析功能
function analyzeSpendingPattern(records, period = 'monthly') {
    if (!records || records.length === 0) {
        return null;
    }
    
    const analysis = {
        period: period,
        totalSpent: 0,
        transactionCount: records.length,
        categoryBreakdown: {},
        dailyAverage: 0,
        topCategories: [],
        spendingTrends: {},
        insights: [],
        recommendations: []
    };
    
    // 1. 基本統計
    records.forEach(record => {
        if (record.type === 'expense' || record.type === '支出') {
            const amount = parseFloat(record.amount) || 0;
            const category = record.category || '未分類';
            
            analysis.totalSpent += amount;
            analysis.categoryBreakdown[category] = (analysis.categoryBreakdown[category] || 0) + amount;
        }
    });
    
    // 2. 計算日均消費
    const daysInPeriod = getDaysInPeriod(records, period);
    analysis.dailyAverage = analysis.totalSpent / daysInPeriod;
    
    // 3. 排序分類
    analysis.topCategories = Object.entries(analysis.categoryBreakdown)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([category, amount]) => ({
            category,
            amount,
            percentage: Math.round((amount / analysis.totalSpent) * 100)
        }));
    
    // 4. 分析消費趨勢
    analysis.spendingTrends = analyzeSpendingTrends(records);
    
    // 5. 生成洞察
    analysis.insights = generateSpendingInsights(analysis);
    
    // 6. 生成建議
    analysis.recommendations = generateSpendingRecommendations(analysis);
    
    return analysis;
}

// 分析消費趨勢
function analyzeSpendingTrends(records) {
    const trends = {
        weeklyPattern: {},
        monthlyPattern: {},
        peakSpendingDay: null,
        peakSpendingCategory: null
    };
    
    // 週模式分析
    const weekDays = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    weekDays.forEach((day, index) => {
        trends.weeklyPattern[day] = 0;
    });
    
    // 月模式分析
    for (let i = 1; i <= 31; i++) {
        trends.monthlyPattern[i] = 0;
    }
    
    records.forEach(record => {
        if (record.type === 'expense' || record.type === '支出') {
            const date = new Date(record.date);
            const amount = parseFloat(record.amount) || 0;
            
            // 週模式
            const weekDay = weekDays[date.getDay()];
            trends.weeklyPattern[weekDay] += amount;
            
            // 月模式
            const dayOfMonth = date.getDate();
            trends.monthlyPattern[dayOfMonth] += amount;
        }
    });
    
    // 找出消費高峰
    trends.peakSpendingDay = Object.entries(trends.weeklyPattern)
        .sort(([,a], [,b]) => b - a)[0][0];
    
    return trends;
}

// 生成消費洞察
function generateSpendingInsights(analysis) {
    const insights = [];
    
    // 1. 主要消費類別洞察
    if (analysis.topCategories.length > 0) {
        const topCategory = analysis.topCategories[0];
        insights.push({
            type: 'top_category',
            title: '主要消費類別',
            content: `您的主要消費集中在${topCategory.category}，佔總支出的${topCategory.percentage}%`,
            level: 'info'
        });
    }
    
    // 2. 日均消費洞察
    if (analysis.dailyAverage > 1000) {
        insights.push({
            type: 'high_daily_spending',
            title: '日均消費較高',
            content: `您的日均消費為NT$${Math.round(analysis.dailyAverage)}，建議檢視消費習慣`,
            level: 'warning'
        });
    }
    
    // 3. 週末消費洞察
    const weekendSpending = (analysis.spendingTrends.weeklyPattern['週六'] || 0) + 
                            (analysis.spendingTrends.weeklyPattern['週日'] || 0);
    const weekdaySpending = Object.entries(analysis.spendingTrends.weeklyPattern)
        .filter(([day]) => !['週六', '週日'].includes(day))
        .reduce((sum, [,amount]) => sum + amount, 0);
    
    if (weekendSpending > weekdaySpending / 5 * 2) { // 週末消費超過平日20%
        insights.push({
            type: 'weekend_spending',
            title: '週末消費偏高',
            content: '您的週末消費顯著高於平日，建議注意週末消費控制',
            level: 'info'
        });
    }
    
    return insights;
}

// 生成消費建議
function generateSpendingRecommendations(analysis) {
    const recommendations = [];
    
    // 1. 預算建議
    if (analysis.topCategories.length > 0) {
        const topCategory = analysis.topCategories[0];
        if (topCategory.percentage > 40) {
            recommendations.push({
                type: 'budget_suggestion',
                title: '設定預算提醒',
                content: `建議為${topCategory.category}設定月度預算，避免超支`,
                action: 'set_budget',
                category: topCategory.category
            });
        }
    }
    
    // 2. 儲蓄建議
    const suggestedSavings = Math.round(analysis.totalSpent * 0.2); // 建議儲蓄20%
    recommendations.push({
        type: 'savings_goal',
        title: '儲蓄目標建議',
        content: `基於您目前的消費水平，建議每月儲蓄NT$${suggestedSavings}`,
        action: 'set_savings_goal',
        amount: suggestedSavings
    });
    
    // 3. 消費習慣建議
    if (analysis.dailyAverage > 500) {
        recommendations.push({
            type: 'spending_habit',
            title: '消費習慣優化',
            content: '建議記錄每筆消費的動機，幫助識別不必要的開支',
            action: 'track_spending_motivation'
        });
    }
    
    return recommendations;
}

// 取得分析期間的天數
function getDaysInPeriod(records, period) {
    if (records.length === 0) return 30;
    
    const dates = records.map(record => new Date(record.date));
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));
    
    const diffTime = Math.abs(maxDate - minDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays || 1;
}

// 學習使用者偏好（機器學習簡化版）
function learnUserPreferences(records, userCorrections = []) {
    const preferences = {
        categoryPreferences: {},
        amountPatterns: {},
        timePatterns: {}
    };
    
    // 分析使用者修正的分類
    userCorrections.forEach(correction => {
        const { originalCategory, correctCategory, amount, description, time } = correction;
        
        // 更新分類偏好
        if (!preferences.categoryPreferences[correctCategory]) {
            preferences.categoryPreferences[correctCategory] = {
                keywords: {},
                amountRanges: [],
                timePatterns: {}
            };
        }
        
        // 提取關鍵字
        if (description) {
            const words = description.split(/\s+/);
            words.forEach(word => {
                if (word.length > 1) {
                    preferences.categoryPreferences[correctCategory].keywords[word] = 
                        (preferences.categoryPreferences[correctCategory].keywords[word] || 0) + 1;
                }
            });
        }
        
        // 記錄金額模式
        preferences.categoryPreferences[correctCategory].amountRanges.push(amount);
        
        // 記錄時間模式
        const hour = new Date(time).getHours();
        if (!preferences.categoryPreferences[correctCategory].timePatterns[hour]) {
            preferences.categoryPreferences[correctCategory].timePatterns[hour] = 0;
        }
        preferences.categoryPreferences[correctCategory].timePatterns[hour]++;
    });
    
    return preferences;
}

// 更新分類規則（基於學習結果）
function updateCategoryRules(preferences) {
    Object.keys(preferences.categoryPreferences).forEach(category => {
        const pref = preferences.categoryPreferences[category];
        
        if (!CATEGORY_RULES[category]) {
            CATEGORY_RULES[category] = {
                keywords: [],
                amountRanges: [],
                timePatterns: {}
            };
        }
        
        // 更新關鍵字（取最常見的）
        const sortedKeywords = Object.entries(pref.keywords)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([word]) => word);
        
        if (sortedKeywords.length > 0) {
            CATEGORY_RULES[category].keywords = [...new Set([
                ...CATEGORY_RULES[category].keywords,
                ...sortedKeywords
            ])];
        }
        
        // 更新金額範圍
        if (pref.amountRanges.length > 0) {
            const amounts = pref.amountRanges.sort((a, b) => a - b);
            const ranges = [
                { min: amounts[0], max: amounts[Math.floor(amounts.length * 0.33)], weight: 0.7 },
                { min: amounts[Math.floor(amounts.length * 0.33)], max: amounts[Math.floor(amounts.length * 0.67)], weight: 0.8 },
                { min: amounts[Math.floor(amounts.length * 0.67)], max: amounts[amounts.length - 1], weight: 0.9 }
            ];
            CATEGORY_RULES[category].amountRanges = ranges;
        }
    });
}

// 導出功能（供其他模組使用）
window.SmartAccounting = {
    suggestCategory,
    analyzeSpendingPattern,
    learnUserPreferences,
    updateCategoryRules,
    CATEGORY_RULES
};
