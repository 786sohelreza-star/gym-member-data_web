
function isExpired(fee_to){
  const today = new Date();
  const end = new Date(fee_to + 'T23:59:59');
  return end < today;
}
