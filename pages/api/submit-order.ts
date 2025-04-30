export default async function handler(req, res) {
  // Autoriser les requêtes cross-origin (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Gérer la requête préliminaire OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, phone, quantity, eventId, value } = req.body;

  if (!name || !email || !eventId || !quantity || !value) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  // Tu peux ici appeler Google Sheets, Resend, etc.
  // Par exemple : enregistrer la commande et envoyer un PDF

  return res.status(200).json({ success: true });
}
