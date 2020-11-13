const https = require('https');

const like = {
  'Capture the Flag, 6v6': 4,
  'Château Deathmatch, 8 Player FFA': 3,
  'Competitive CTF, 6v6': 1,
  'Competitive Deathmatch, 8 Player FFA': 3,
  'Competitive Elimination, 3v3': 1,
  'Competitive Elimination, 3v3 Groups Only': 1,
  'Competitive Elimination, 6v6': 1,
  'Competitive Open Queue, 6v6': 5,
  'Competitive Team Deathmatch, 4v4': 7,
  'Copa Lúcioball, 3v3': 1,
  'Deathmatch, 8 Player FFA': 3,
  'Elimination, 3v3': 1,
  'Elimination, 6v6': 2,
  'Hero Gauntlet, 8 Player FFA': 9,
  'Horizon No Limits, 6v6': 10,
  'Limited Duel, 1v1': 7,
  'Low Gravity, 6v6': 3,
  'Lúcioball, 3v3': 1,
  'Mirrored Deathmatch, 8 Player FFA': 8,
  'Mystery Deathmatch, 8 Player FFA': 3,
  'Mystery Duel, 1v1': 2,
  'Mystery Heroes, 6v6': 1,
  'No Limits Payloads, 6v6': 10,
  'No Limits, 6v6': 10,
  'Petra Deathmatch, 8 Player FFA': 3,
  'Quick Play Classic, 6v6': 0,
  'Team Deathmatch, 4v4': 8,
  'Total Mayhem, 6v6': 2,
  'Yeti Hunter, 5v1': 1,
};

const getLike = (m) => {
  if (m in like) return like[m];
  return 11;
};

const getOW = async () => {
  return ms;
}

module.exports = (req, res) => {
  https.get('https://overwatcharcade.today/api/overwatch/today', (r) => {
    r.setEncoding('utf8');
    let rr = '';
    r.on('data', (ch) => {
      rr += ch;
    });
    r.on('end', () => {
      const b = JSON.parse(rr);
      const ms = Object.values(b.modes).map((m) => `${m.name}, ${m.players}`);
      ms.sort((q, p) => getLike(p) - getLike(q));
      res.send(ms.join('\n'));
    });
  });
};
