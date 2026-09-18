import pandas as pd
import matplotlib.pyplot as plt

df=pd.read_csv('data.csv')
print('Churn rate:',round(df.churned.mean()*100,2),'%')
print('\nBy plan:\n',(df.groupby('plan').churned.mean()*100).round(2))
df['tenure_band']=pd.cut(df.tenure_months,[0,6,12,24,100],labels=['0-6','7-12','13-24','25+'])
print('\nBy tenure:\n',(df.groupby('tenure_band',observed=True).churned.mean()*100).round(2))
df.groupby('plan').churned.mean().mul(100).plot(kind='bar',title='Churn Rate by Plan')
plt.ylabel('Churn %');plt.tight_layout();plt.savefig('churn_by_plan.png',dpi=160)
