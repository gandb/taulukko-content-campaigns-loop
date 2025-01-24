/*
Need put 
,
	 "scripts": [
    "./scripts/thumbnailFix.js"
	],
	In the manifest.json
*/
let thumbMapNames =  null; 
  
(async () => {
    console.log("Generating scenes thumb nail"); 
	thumbMapNames = new Map([
  ["A Caverna 1474 DC", 'mapa-1474.webp'],
  ['A Caverna 2132 DC', 'mapa-2132.webp'],
  ["A Caverna 500 AC", 'mapa-500.webp'],
  ["Combate 2132 DC", 'mapa-combate.webp'],
  ["KingHouse", 'kinghouse.webp'],
  ["Main", 'main.webp'] 
]);
})();


Hooks.on("importAdventure",  (adventure, formData, created, updated) => 
{
	  
	game.scenes.forEach(async(scene)=>
	{
		 
		try{ 
			
			if(!thumbMapNames.has(scene.name)){
				return;
			}
			console.log(`Start regenerated thumbnail for ${scene.name}`);
			await scene.update({thumb: "modules/loop-fate/assets/scenes/"+thumbMapNames.get(scene.name)});
		}
		catch(e){
			console.error(e);
		}
	});
	console.log("Thumbnails regenrated with success!");
 
 });
