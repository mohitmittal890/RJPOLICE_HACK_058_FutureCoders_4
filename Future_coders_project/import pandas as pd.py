import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix


df = pd.read_csv('C:\Users\SMILE\OneDrive\Documents\PERSONAL DETAILS\FIR\FIR_DATASET.csv')

# Drop rows with missing values
df = df.dropna()

# Encode categorical variables
label_encoder = LabelEncoder()
df['Section'] = label_encoder.fit_transform(df['Section'])
from sklearn.model_selection import train_test_split

X = df.drop('FIR_Number', axis=1)
y = df['FIR_Number']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
from sklearn.ensemble import RandomForestClassifier

rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)
rf_classifier.fit(X_train, y_train)
y_pred = rf_classifier.predict(X_test)

from sklearn.metrics import confusion_matrix, classification_report

print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))