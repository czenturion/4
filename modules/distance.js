const calculateFallDistance = (time) => {
  const g = 9.8
  return 'Высота падения: ' + (1/2) * g * time ** 2 + ' метров'
}

export default calculateFallDistance