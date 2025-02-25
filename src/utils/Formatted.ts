

export function formatDate(dateString:string):string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatPhone(phoneNumber: number): string {
  const phone = phoneNumber.toString();
    
  if (phone.length !== 13) return "Número inválido";
  
    const countryCode = phone.slice(0, 2); 
    const areaCode = phone.slice(2, 4);
    const firstPart = phone.slice(4, 9); 
    const secondPart = phone.slice(9); 
  
    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  }
 