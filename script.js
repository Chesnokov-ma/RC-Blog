const text_block = ([
	boldText,
	italicText,
	a1,
	a2,
	a3
] = document.getElementsByName('elem-color-change'))

const background = document.getElementById('welcome')

let is_black = true

italicText.addEventListener('click', () => {
	if (is_black) {
		background.style.backgroundColor = 'white'

		text_block.forEach((elem) => {
			elem.style.color = 'black'
		})

		is_black = false
	} else {
		background.style.backgroundColor = 'black'

		text_block.forEach((elem) => {
			elem.style.color = 'white'
		})

		is_black = true
	}
})
