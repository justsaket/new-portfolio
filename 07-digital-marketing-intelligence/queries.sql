-- Paid media efficiency
SELECT campaign,
SUM(impressions) AS impressions,
SUM(clicks) AS clicks,
ROUND(100.0 * SUM(clicks) / NULLIF(SUM(impressions),0), 2) AS ctr_pct,
SUM(spend) AS spend,
SUM(conversions) AS conversions,
ROUND(100.0 * SUM(conversions) / NULLIF(SUM(clicks),0), 2) AS conversion_rate_pct,
ROUND(SUM(revenue) / NULLIF(SUM(spend),0), 2) AS roas
FROM marketing_data
WHERE channel = 'Paid Search'
GROUP BY campaign
ORDER BY roas DESC;

-- SEO pages needing investigation
SELECT campaign, seo_score, engagement_rate
FROM marketing_data
WHERE channel = 'SEO'
ORDER BY seo_score ASC;

-- Cross-channel contribution
SELECT channel, SUM(clicks) AS clicks,
SUM(conversions) AS conversions, SUM(revenue) AS revenue
FROM marketing_data
GROUP BY channel
ORDER BY revenue DESC;