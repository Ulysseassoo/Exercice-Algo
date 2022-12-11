function smallestNumberOfBills(bills, amount) {
	bills.sort((a, b) => b - a)

	let count = 0

	// Pour chaque billet ou pièce disponible dans la liste
	for (let i = 0; i < bills.length; i++) {
		if (bills[i] > amount) {
			continue
		}

		// Calcule le nombre de fois que le billet ou pièce peut être utilisé pour atteindre le montant restant
		const numBills = Math.floor(amount / bills[i])

		count += numBills

		amount -= numBills * bills[i]

		if (amount == 0) {
			return count
		}
	}

	return -1
}
