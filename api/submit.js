export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://n8n.srv1138376.hstgr.cloud/webhook/manual-call-intake',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json().catch(() => ({}));
    res.status(response.ok ? 200 : 500).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
