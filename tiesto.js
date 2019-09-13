const input    ="0130400000030420"
const solution ="2134431212433421"

const gridlen=Math.sqrt(input.length)
const factor=Math.sqrt(gridlen)

const mf=Math.floor

const inputA=input.split("")
const empty_cells = inputA.reduce( (a, e, i) => (e == '0') ? a.concat(i) : a, [])
const grid=[]
for ( let i=0 ; i < gridlen ; i++ ) {
	grid.push(inputA.slice(i*gridlen, i*gridlen+gridlen))
}


function get_row(index) {
	return row = grid[index]
}

function get_col(index) {
	return grid.map( e => { return e[ index ] })
}

function get_square(coord) {
	const array = []
	const ic = [ factor*mf(coord[0]/factor), factor*mf(coord[1]/factor) ]
	for ( let i=0 ; i < factor ; i++ ) {
		array.push( ...grid[ic[0]+i].slice(ic[1],ic[1]+factor) )
	}
	return array
}

function possible_values(index) {
	const coord = [mf(index/gridlen), index%gridlen]
	const array = []
	const out   = []
	
	array.push( ...get_row(coord[0]) )
	array.push( ...get_col(coord[1]) )
	array.push( ...get_square(coord) )
	
	for ( let i=1 ; i <= gridlen ; i++ ) {
		if (! array.includes(i+"") ) out.push(i)
	}
	
	return out
}

console.log(grid)
console.log(empty_cells)
console.log(possible_values(empty_cells[0]))
