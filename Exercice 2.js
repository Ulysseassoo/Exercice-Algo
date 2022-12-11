function longueurSequenceZeroBinaire(n) {
	if (n === 0) return 0

	// Variable pour enregistrer la longueur de la séquence la plus longue de 0
	let max = 0
	// Variable pour enregistrer la longueur de la séquence actuelle de 0
	let sequence = 0

	while (n > 0) {
		if (n % 2 === 0) {
			sequence++
		} else {
			max = Math.max(max, sequence)
			sequence = 0
		}

		n = n >> 1
	}

	return max
}
