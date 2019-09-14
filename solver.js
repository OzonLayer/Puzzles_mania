// sudoku 9x9
const solution="396278451485913726271645839547829613812736594639451287158364972763592148924187365"
const input   ="306008400080010720200040009507009010000030090030050207108004000000000048920107300"

// sudoku 3x3
// const input    ="0130400000030420"
// const solution ="2134431212433421"

const gridlen=Math.sqrt(input.length)
const factor=Math.sqrt(gridlen)

const mf=Math.floor

const inputA=input.split("")
// const empty_cells = inputA.reduce( (a, e, i) => (e == '0') ? a.concat(i) : a, [])

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

function coordinates(index) {
}

function possible_values(coord) {
	const array = []
	const out   = []
	
	array.push( ...get_row(coord[0]) )
	array.push( ...get_col(coord[1]) )
	array.push( ...get_square(coord) )
	
	for ( let i=1 ; i <= gridlen ; i++ ) {
		if (! array.includes(i+"") ) out.push(i+"")
	}
	
	return out
}

function set_value(c, value) {
	grid[c[0]][c[1]] = value
}

function empty_cell() {
	return grid.join().split(",").join("").indexOf('0')
}

function coordinates(index) {
	return [mf(index/gridlen), index%gridlen]
}

function solve(index) {
	if ( index == -1 ) return true
	
	const coord = coordinates(index)
	const vs = possible_values(coord)
	
	const vslength = vs.length
	for ( let i=0 ; i<vslength ; i++ ) {
		set_value(coord, vs[i])
		if ( solve( empty_cell() ) ) return true
		set_value(coord, 0+"")
	} 
	return false
}

solve( empty_cell() )

console.log(solution)
console.log(grid.join().split(",").join(""))
