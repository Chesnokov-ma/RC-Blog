const button = document.getElementById('push_button')

const person_img = document.getElementById('center-img')

const first_row = document.getElementsByName('first-row')
const second_row = document.getElementsByName('second-row')
const third_row = document.getElementsByName('third-row')

const all_rows = [...first_row, ...second_row, ...third_row]

let count = 0

button.addEventListener('click', () => {
	if (count === 0) {
		first_row.forEach((elem) => {
			elem.style.visibility = 'visible'
		})

		count++
	} else if (count === 1) {
		second_row.forEach((elem) => {
			elem.style.visibility = 'visible'
		})

		count++
	} else if (count === 2) {
		third_row.forEach((elem) => {
			elem.style.visibility = 'visible'
		})

		person_img.src = 'src/user2.svg'
		// console.log(person_img.src)
		count++
	} else if (count === 3) {
		all_rows.map((elem) => {
			elem.style.visibility = 'hidden'
		})

		person_img.src = 'src/user1.svg'
		count = 0
	}
})

all_rows[0].getElementsByTagName('img')[0].addEventListener('click', () => {
	window.open('https://vk.com/fcking_dead', '_blank')
})

all_rows[1].getElementsByTagName('img')[0].addEventListener('click', () => {
	window.open(
		'https://www.youtube.com/channel/UC_n9wRHpzhCPecjs18jUaFA',
		'_blank'
	)
})

all_rows[2].addEventListener('click', () => {
	window.open('../../Pages/Person/Person.html')
})

all_rows[3].getElementsByTagName('img')[0].addEventListener('click', () => {
	window.open('https://github.com/Chesnokov-ma', '_blank')
})

all_rows[4].getElementsByTagName('img')[0].addEventListener('click', () => {
	window.open('https://bitbucket.org/Chesnokov-ma/', '_blank')
})

all_rows[5].getElementsByTagName('img')[0].addEventListener('click', () => {
	window.open('https://bitbucket.org/Chesnokov-ma/', '_blank')
})

all_rows[all_rows.length - 1].addEventListener('click', () => {
	window.open('../../index.html')
})
