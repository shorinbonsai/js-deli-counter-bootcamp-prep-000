function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'The line is currently empty.';
  }
  const numbName = [];
  for(let i=0, j=katzDeliLine.length; i<j; i++) {
    numbName.push(`${i + 1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently: ${numbName.join(', ')}`;
}
