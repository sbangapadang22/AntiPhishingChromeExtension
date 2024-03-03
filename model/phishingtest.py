# Function to predict whether a URL is 'good' or 'bad'
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LogisticRegression
from nltk.tokenize import RegexpTokenizer
from nltk.stem.snowball import SnowballStemmer
import pickle

# Assuming the model is saved as 'phishing.pkl' and necessary preprocessing has been done
loaded_model = pickle.load(open('phishing.pkl', 'rb'))

def predict_url(url):
    tokenizer = RegexpTokenizer(r'[A-Za-z]+')
    stemmer = SnowballStemmer("english")
    tokens = tokenizer.tokenize(url)
    stemmed = [stemmer.stem(word) for word in tokens]
    preprocessed_url = " ".join(stemmed)
    # Predict using the loaded model
    prediction = loaded_model.predict([preprocessed_url])
    return prediction[0]

# Example of using the function (this line should be adjusted according to actual usage):
predict_url('https://example.com')
