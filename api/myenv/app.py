from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load your pipeline
with open('phishing.pkl', 'rb') as pipeline_file:
    pipeline = pickle.load(pipeline_file)

@app.route('/evaluate', methods=['POST'])
def evaluate_url():
    data = request.json
    url = data['url']
    # The pipeline expects an array of texts, so we wrap the URL in a list
    prediction = pipeline.predict([url])
    return jsonify({'is_phishing': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
