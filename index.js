var katzDeliLine = []

function takeANumber( line, name ) {
    line.push( name )
    return `Welcome, ${ name }. You are number ${ line.length } in line.`
}

function nowServing( line ) {
  if( line.length > 1 )
    return `Currently serving ${ line.shift() }.`
  else
    return 'There is nobody waiting to be served!'
}

function currentLine( line ) {
  var newLine = line.reduce( ( list, person, i, line ) => list + `${ i + 1 }. ${ person }, `, 'The line is currently: ')
  return newLine.slice( 0, newLine.length - 1 )
}
