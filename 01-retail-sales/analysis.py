import pandas as pd
import matplotlib.pyplot as plt

df=pd.read_csv('data.csv',parse_dates=['date'])
df['profit']=df.sales-df.cost
df['margin_pct']=df.profit/df.sales*100
df['month']=df.date.dt.to_period('M').astype(str)
print('Revenue:',df.sales.sum())
print('Profit:',df.profit.sum())
print('Margin %:',round(df.profit.sum()/df.sales.sum()*100,2))
print('\nBy region:\n',df.groupby('region')[['sales','profit']].sum().sort_values('profit',ascending=False))
print('\nBy category:\n',df.groupby('category')[['sales','profit']].sum().sort_values('profit',ascending=False))
df.groupby('month').sales.sum().plot(kind='line',marker='o',title='Monthly Sales')
plt.tight_layout(); plt.savefig('monthly_sales.png',dpi=160)
