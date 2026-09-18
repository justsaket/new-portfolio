import pandas as pd
import matplotlib.pyplot as plt

df=pd.read_csv('data.csv')
df['gross_profit']=df.revenue-df.cogs
df['opex']=df[['marketing','payroll','technology','other']].sum(axis=1)
df['operating_profit']=df.gross_profit-df.opex
df['gross_margin_pct']=df.gross_profit/df.revenue*100
df['operating_margin_pct']=df.operating_profit/df.revenue*100
print(df[['month','revenue','gross_profit','operating_profit','gross_margin_pct','operating_margin_pct']].round(2).to_string(index=False))
print('Revenue growth %:',round((df.iloc[-1].revenue/df.iloc[0].revenue-1)*100,2))
df.plot(x='month',y=['revenue','operating_profit'],marker='o',title='Revenue vs Operating Profit');plt.tight_layout();plt.savefig('financial_trend.png',dpi=160)
