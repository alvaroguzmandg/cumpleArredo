const messages=[
 name=>`¡Feliz cumple, ${name}! 🎉 Que tengas un hermoso día y un año lleno de cosas lindas. ¡A celebrar!`,
 name=>`¡Muy feliz cumpleaños, ${name}! 🎂 Ojalá hoy sobren los buenos momentos, los abrazos y algo rico para compartir. ¡Que lo disfrutes mucho!`,
 name=>`¡Feliz cumple, ${name}! ✨ Que este nuevo año venga con proyectos que te entusiasmen, buenas sorpresas y muchos motivos para sonreír.`,
 name=>`¡Hoy se festeja, ${name}! 🥳 Te deseo un cumpleaños lleno de alegría y un gran año por delante. ¡Pasala hermoso!`,
 name=>`¡Muchas felicidades, ${name}! 🎈 Que tengas un día tan lindo como los buenos momentos que compartimos en equipo. ¡Un abrazo grande y feliz cumple!`
];
export function pickGreeting(fullName,previousIndex,random=Math.random){
 const name=fullName.trim().split(/\s+/)[0];
 const choices=messages.map((_,i)=>i).filter(i=>i!==previousIndex);
 const index=choices[Math.min(choices.length-1,Math.max(0,Math.floor(random()*choices.length)))];
 return {index,text:messages[index](name)};
}
