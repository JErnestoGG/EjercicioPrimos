const primo = num => {

	if (num == 0 || num == 1 || num == 4) return false;
	for (let i = 2; i < num / 2; i++) {
		if (num % i == 0) return false;
	}
	return true;
}

for (let j=2;j<=30;j++) {
    if (primo(j))
        console.log(j)
}