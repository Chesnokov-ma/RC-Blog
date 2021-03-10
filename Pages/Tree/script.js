const main = document.getElementById('main')
const tree = document.getElementById('tree')

const shadesTmp = document.getElementsByClassName('shade')
const shades = [...shadesTmp]

const btn = document.getElementById('name-btn')
const back_btn = document.getElementById('back')
const namePoints = [
	[116, 134],
	[112, 201],
	[113, 258],
	[117, 336],
	[148, 170],
	[173, 215],
	[224, 213],
	[264, 178],
	[308, 134],
	[315, 227],
	[315, 274],
	[318, 311]
]

let dragTree = false,
	dragToys = false

let movingToy = null

let toys = []
let toysOnTree = []

let treeOffsetX, treeOffsetY

let isHidden = false

tree.addEventListener('dragstart', () => {
	tree.style.position = 'absolute'
	main.style.backgroundColor = 'bisque'
	dragTree = true

	toysOnTree.forEach((e) => {
		e.style.visibility = 'hidden'
	})
})

tree.addEventListener('dragend', () => {
	main.style.backgroundColor = 'white'

	toysOnTree.forEach((e) => {
		e.style.visibility = 'visible'
		// e.style += 'position: absolute; width: 70px; height: 70px;'
	})
})

main.addEventListener('dragover', (e) => {
	e.preventDefault()
})

tree.addEventListener('dragover', (e) => {
	e.preventDefault()
})

main.addEventListener('drop', (e) => {
	if (dragTree) {
		tree.style.left = e.pageX - tree.offsetWidth / 2 + 'px'
		tree.style.top = e.pageY - tree.offsetHeight / 2 + 'px'

		toysOnTree.forEach((elem) => {
			// console.log(e.pageX)

			elem.style.left = Number(e.pageX) + 'px'
			elem.style.top = Number(e.pageY) + 'px'
		})

		dragTree = false
	} else {
		movingToy.style.left = e.pageX - movingToy.offsetWidth / 2 + 'px'
		movingToy.style.top = e.pageY - movingToy.offsetHeight / 2 + 'px'

		dragToys = false
	}
})

tree.addEventListener('drop', (e) => {
	if (dragToys) {
		movingToy.draggable = false
		movingToy.position = 'absolute'
		dragToys = false
		// tree.appendChild(movingToy)

		toysOnTree.push(movingToy)
	}
})

shades.forEach((e) => {
	e.addEventListener('click', () => {
		let randomPlaceImg = document.createElement('img')
		randomPlaceImg.src = e
			.getElementsByTagName('img')[0]
			.src.replace('_plus', '')

		randomPlaceImg.style = `position: absolute; width: 70px; height: 70px; left: ${Math.floor(
			Math.random() * (main.offsetWidth - 200)
		)}px; top: ${Math.floor(Math.random() * (main.offsetHeight - 100))}px;`

		toys.push(randomPlaceImg)

		randomPlaceImg.addEventListener('dragstart', () => {
			movingToy = randomPlaceImg
			dragToys = true
		})

		randomPlaceImg.addEventListener('dragend', () => {
			movingToy = null
		})

		main.appendChild(randomPlaceImg)
	})
})

main.addEventListener('click', (e) => {
	console.log(`${e.pageX}, ${e.pageY}`)
})

btn.addEventListener('click', () => {
	if (!isHidden) {
		tree.style.visibility = 'hidden'
		toys.forEach((e) => {
			// e.style.visibility = 'hidden'
		})

		for (let i = 0; i < namePoints.length; i++) {
			if (i < toys.length) {
				toys[i].style.left = namePoints[i][0] + 'px'
				toys[i].style.top = namePoints[i][1] + 'px'
			}
		}

		isHidden = true
	} else {
		tree.style.visibility = 'visible'
		// toys.forEach((e) => {
		// e.style.visibility = 'visible'
		// })

		isHidden = false
	}
})

back_btn.addEventListener('click', () => {
	window.open('../../', '_self')
})
