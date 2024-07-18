from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Les données initiales pour les ordonnées (valeurs champs de saisies Profondeur de sondage)
ordonnees_initiales = [0, 0, 0]

# Route pour la page principale
@app.route('/')
def index():
    return render_template('index.html', data=ordonnees_initiales)

# Route pour la mise à jour des données
@app.route('/update_data', methods=['POST'])
def update_data():
    global ordonnees_initiales

    # Récupérer les données du formulaire
    updated_data = request.json['data']

    # Mettre à jour les données
    ordonnees_initiales = updated_data

    # Retourner les nouvelles données (pas nécessaire dans ce cas)
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
