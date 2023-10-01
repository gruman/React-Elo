function getElo(winElo, loseElo, length = 1) {
  let d = winElo - loseElo;
  let elo = Math.ceil((4 * Math.sqrt(length)) / (1 + Math.pow(10, d * Math.sqrt(length / 2000))))

  let d2 = loseElo - winElo;
  let elo2 = Math.ceil((4 * Math.sqrt(length)) / (1 + Math.pow(10, -d2 * Math.sqrt(length / 2000))))
  console.log(elo, -elo2)
  return {
    winNewElo: winElo + elo,
    loseNewElo: loseElo - elo2
  }
}

module.exports = {
  getElo,
};