var MyCraft = {};

MyCraft.rows = 15;
MyCraft.cols = 20;

MyCraft.grid = [];

MyCraft.tiles = {
	dirt: 'images/dirt.png',
	grass: 'images/grass.png',
	leaf: 'images/leaf.jpg',
	rock: 'images/rock.png',
	tree: 'images/tree.png',
	none: '',
};

MyCraft.tools = {
	pickaxe: 'pickaxe',
	shovel: 'shovel',
	axe: 'axe'
};

MyCraft.toolsAbility = {
	pickaxe: ['rock'],
	shovel: ['grass', 'dirt'],
	axe: ['leaf', 'tree']
};

MyCraft.selectedTile = '';
MyCraft.selectedTool = '';
MyCraft.lastSelected = '';

MyCraft.inventory = {
	dirt: 0,
	grass: 0,
	tree: 0,
	leaf: 0,
	rock: 0
};

MyCraft.world = {"tile-0-0":{"x":"0","y":"0","tileType":"","element":"tile-0-0"},"tile-0-1":{"x":"0","y":"1","tileType":"","element":"tile-0-1"},"tile-0-2":{"x":"0","y":"2","tileType":"","element":"tile-0-2"},"tile-0-3":{"x":"0","y":"3","tileType":"","element":"tile-0-3"},"tile-0-4":{"x":"0","y":"4","tileType":"","element":"tile-0-4"},"tile-0-5":{"x":"0","y":"5","tileType":"","element":"tile-0-5"},"tile-0-6":{"x":"0","y":"6","tileType":"","element":"tile-0-6"},"tile-0-7":{"x":"0","y":"7","tileType":"","element":"tile-0-7"},"tile-0-8":{"x":"0","y":"8","tileType":"","element":"tile-0-8"},"tile-0-9":{"x":"0","y":"9","tileType":"","element":"tile-0-9"},"tile-0-10":{"x":"0","y":"10","tileType":"","element":"tile-0-10"},"tile-0-11":{"x":"0","y":"11","tileType":"","element":"tile-0-11"},"tile-0-12":{"x":"0","y":"12","tileType":"","element":"tile-0-12"},"tile-0-13":{"x":"0","y":"13","tileType":"","element":"tile-0-13"},"tile-0-14":{"x":"0","y":"14","tileType":"","element":"tile-0-14"},"tile-0-15":{"x":"0","y":"15","tileType":"","element":"tile-0-15"},"tile-0-16":{"x":"0","y":"16","tileType":"","element":"tile-0-16"},"tile-0-17":{"x":"0","y":"17","tileType":"","element":"tile-0-17"},"tile-0-18":{"x":"0","y":"18","tileType":"","element":"tile-0-18"},"tile-0-19":{"x":"0","y":"19","tileType":"","element":"tile-0-19"},"tile-0-20":{"x":"0","y":"20","tileType":"","element":"tile-0-20"},"tile-0-21":{"x":"0","y":"21","tileType":"","element":"tile-0-21"},"tile-0-22":{"x":"0","y":"22","tileType":"","element":"tile-0-22"},"tile-0-23":{"x":"0","y":"23","tileType":"","element":"tile-0-23"},"tile-0-24":{"x":"0","y":"24","tileType":"","element":"tile-0-24"},"tile-0-25":{"x":"0","y":"25","tileType":"","element":"tile-0-25"},"tile-0-26":{"x":"0","y":"26","tileType":"","element":"tile-0-26"},"tile-0-27":{"x":"0","y":"27","tileType":"","element":"tile-0-27"},"tile-0-28":{"x":"0","y":"28","tileType":"","element":"tile-0-28"},"tile-0-29":{"x":"0","y":"29","tileType":"","element":"tile-0-29"},"tile-1-0":{"x":"1","y":"0","tileType":"","element":"tile-1-0"},"tile-1-1":{"x":"1","y":"1","tileType":"","element":"tile-1-1"},"tile-1-2":{"x":"1","y":"2","tileType":"","element":"tile-1-2"},"tile-1-3":{"x":"1","y":"3","tileType":"","element":"tile-1-3"},"tile-1-4":{"x":"1","y":"4","tileType":"","element":"tile-1-4"},"tile-1-5":{"x":"1","y":"5","tileType":"","element":"tile-1-5"},"tile-1-6":{"x":"1","y":"6","tileType":"","element":"tile-1-6"},"tile-1-7":{"x":"1","y":"7","tileType":"","element":"tile-1-7"},"tile-1-8":{"x":"1","y":"8","tileType":"","element":"tile-1-8"},"tile-1-9":{"x":"1","y":"9","tileType":"","element":"tile-1-9"},"tile-1-10":{"x":"1","y":"10","tileType":"","element":"tile-1-10"},"tile-1-11":{"x":"1","y":"11","tileType":"","element":"tile-1-11"},"tile-1-12":{"x":"1","y":"12","tileType":"","element":"tile-1-12"},"tile-1-13":{"x":"1","y":"13","tileType":"","element":"tile-1-13"},"tile-1-14":{"x":"1","y":"14","tileType":"","element":"tile-1-14"},"tile-1-15":{"x":"1","y":"15","tileType":"","element":"tile-1-15"},"tile-1-16":{"x":"1","y":"16","tileType":"","element":"tile-1-16"},"tile-1-17":{"x":"1","y":"17","tileType":"","element":"tile-1-17"},"tile-1-18":{"x":"1","y":"18","tileType":"","element":"tile-1-18"},"tile-1-19":{"x":"1","y":"19","tileType":"","element":"tile-1-19"},"tile-1-20":{"x":"1","y":"20","tileType":"","element":"tile-1-20"},"tile-1-21":{"x":"1","y":"21","tileType":"","element":"tile-1-21"},"tile-1-22":{"x":"1","y":"22","tileType":"","element":"tile-1-22"},"tile-1-23":{"x":"1","y":"23","tileType":"","element":"tile-1-23"},"tile-1-24":{"x":"1","y":"24","tileType":"","element":"tile-1-24"},"tile-1-25":{"x":"1","y":"25","tileType":"","element":"tile-1-25"},"tile-1-26":{"x":"1","y":"26","tileType":"","element":"tile-1-26"},"tile-1-27":{"x":"1","y":"27","tileType":"","element":"tile-1-27"},"tile-1-28":{"x":"1","y":"28","tileType":"","element":"tile-1-28"},"tile-1-29":{"x":"1","y":"29","tileType":"","element":"tile-1-29"},"tile-2-0":{"x":"2","y":"0","tileType":"","element":"tile-2-0"},"tile-2-1":{"x":"2","y":"1","tileType":"","element":"tile-2-1"},"tile-2-2":{"x":"2","y":"2","tileType":"","element":"tile-2-2"},"tile-2-3":{"x":"2","y":"3","tileType":"","element":"tile-2-3"},"tile-2-4":{"x":"2","y":"4","tileType":"","element":"tile-2-4"},"tile-2-5":{"x":"2","y":"5","tileType":"","element":"tile-2-5"},"tile-2-6":{"x":"2","y":"6","tileType":"","element":"tile-2-6"},"tile-2-7":{"x":"2","y":"7","tileType":"","element":"tile-2-7"},"tile-2-8":{"x":"2","y":"8","tileType":"","element":"tile-2-8"},"tile-2-9":{"x":"2","y":"9","tileType":"","element":"tile-2-9"},"tile-2-10":{"x":"2","y":"10","tileType":"","element":"tile-2-10"},"tile-2-11":{"x":"2","y":"11","tileType":"","element":"tile-2-11"},"tile-2-12":{"x":"2","y":"12","tileType":"","element":"tile-2-12"},"tile-2-13":{"x":"2","y":"13","tileType":"","element":"tile-2-13"},"tile-2-14":{"x":"2","y":"14","tileType":"","element":"tile-2-14"},"tile-2-15":{"x":"2","y":"15","tileType":"","element":"tile-2-15"},"tile-2-16":{"x":"2","y":"16","tileType":"","element":"tile-2-16"},"tile-2-17":{"x":"2","y":"17","tileType":"","element":"tile-2-17"},"tile-2-18":{"x":"2","y":"18","tileType":"","element":"tile-2-18"},"tile-2-19":{"x":"2","y":"19","tileType":"","element":"tile-2-19"},"tile-2-20":{"x":"2","y":"20","tileType":"","element":"tile-2-20"},"tile-2-21":{"x":"2","y":"21","tileType":"","element":"tile-2-21"},"tile-2-22":{"x":"2","y":"22","tileType":"","element":"tile-2-22"},"tile-2-23":{"x":"2","y":"23","tileType":"","element":"tile-2-23"},"tile-2-24":{"x":"2","y":"24","tileType":"","element":"tile-2-24"},"tile-2-25":{"x":"2","y":"25","tileType":"","element":"tile-2-25"},"tile-2-26":{"x":"2","y":"26","tileType":"","element":"tile-2-26"},"tile-2-27":{"x":"2","y":"27","tileType":"","element":"tile-2-27"},"tile-2-28":{"x":"2","y":"28","tileType":"","element":"tile-2-28"},"tile-2-29":{"x":"2","y":"29","tileType":"","element":"tile-2-29"},"tile-3-0":{"x":"3","y":"0","tileType":"","element":"tile-3-0"},"tile-3-1":{"x":"3","y":"1","tileType":"","element":"tile-3-1"},"tile-3-2":{"x":"3","y":"2","tileType":"","element":"tile-3-2"},"tile-3-3":{"x":"3","y":"3","tileType":"","element":"tile-3-3"},"tile-3-4":{"x":"3","y":"4","tileType":"","element":"tile-3-4"},"tile-3-5":{"x":"3","y":"5","tileType":"","element":"tile-3-5"},"tile-3-6":{"x":"3","y":"6","tileType":"","element":"tile-3-6"},"tile-3-7":{"x":"3","y":"7","tileType":"","element":"tile-3-7"},"tile-3-8":{"x":"3","y":"8","tileType":"","element":"tile-3-8"},"tile-3-9":{"x":"3","y":"9","tileType":"","element":"tile-3-9"},"tile-3-10":{"x":"3","y":"10","tileType":"","element":"tile-3-10"},"tile-3-11":{"x":"3","y":"11","tileType":"","element":"tile-3-11"},"tile-3-12":{"x":"3","y":"12","tileType":"","element":"tile-3-12"},"tile-3-13":{"x":"3","y":"13","tileType":"","element":"tile-3-13"},"tile-3-14":{"x":"3","y":"14","tileType":"","element":"tile-3-14"},"tile-3-15":{"x":"3","y":"15","tileType":"","element":"tile-3-15"},"tile-3-16":{"x":"3","y":"16","tileType":"","element":"tile-3-16"},"tile-3-17":{"x":"3","y":"17","tileType":"","element":"tile-3-17"},"tile-3-18":{"x":"3","y":"18","tileType":"","element":"tile-3-18"},"tile-3-19":{"x":"3","y":"19","tileType":"","element":"tile-3-19"},"tile-3-20":{"x":"3","y":"20","tileType":"","element":"tile-3-20"},"tile-3-21":{"x":"3","y":"21","tileType":"","element":"tile-3-21"},"tile-3-22":{"x":"3","y":"22","tileType":"","element":"tile-3-22"},"tile-3-23":{"x":"3","y":"23","tileType":"","element":"tile-3-23"},"tile-3-24":{"x":"3","y":"24","tileType":"","element":"tile-3-24"},"tile-3-25":{"x":"3","y":"25","tileType":"","element":"tile-3-25"},"tile-3-26":{"x":"3","y":"26","tileType":"","element":"tile-3-26"},"tile-3-27":{"x":"3","y":"27","tileType":"","element":"tile-3-27"},"tile-3-28":{"x":"3","y":"28","tileType":"","element":"tile-3-28"},"tile-3-29":{"x":"3","y":"29","tileType":"","element":"tile-3-29"},"tile-4-0":{"x":"4","y":"0","tileType":"","element":"tile-4-0"},"tile-4-1":{"x":"4","y":"1","tileType":"","element":"tile-4-1"},"tile-4-2":{"x":"4","y":"2","tileType":"","element":"tile-4-2"},"tile-4-3":{"x":"4","y":"3","tileType":"","element":"tile-4-3"},"tile-4-4":{"x":"4","y":"4","tileType":"","element":"tile-4-4"},"tile-4-5":{"x":"4","y":"5","tileType":"","element":"tile-4-5"},"tile-4-6":{"x":"4","y":"6","tileType":"","element":"tile-4-6"},"tile-4-7":{"x":"4","y":"7","tileType":"","element":"tile-4-7"},"tile-4-8":{"x":"4","y":"8","tileType":"","element":"tile-4-8"},"tile-4-9":{"x":"4","y":"9","tileType":"","element":"tile-4-9"},"tile-4-10":{"x":"4","y":"10","tileType":"","element":"tile-4-10"},"tile-4-11":{"x":"4","y":"11","tileType":"","element":"tile-4-11"},"tile-4-12":{"x":"4","y":"12","tileType":"","element":"tile-4-12"},"tile-4-13":{"x":"4","y":"13","tileType":"","element":"tile-4-13"},"tile-4-14":{"x":"4","y":"14","tileType":"","element":"tile-4-14"},"tile-4-15":{"x":"4","y":"15","tileType":"","element":"tile-4-15"},"tile-4-16":{"x":"4","y":"16","tileType":"","element":"tile-4-16"},"tile-4-17":{"x":"4","y":"17","tileType":"","element":"tile-4-17"},"tile-4-18":{"x":"4","y":"18","tileType":"","element":"tile-4-18"},"tile-4-19":{"x":"4","y":"19","tileType":"","element":"tile-4-19"},"tile-4-20":{"x":"4","y":"20","tileType":"","element":"tile-4-20"},"tile-4-21":{"x":"4","y":"21","tileType":"","element":"tile-4-21"},"tile-4-22":{"x":"4","y":"22","tileType":"","element":"tile-4-22"},"tile-4-23":{"x":"4","y":"23","tileType":"","element":"tile-4-23"},"tile-4-24":{"x":"4","y":"24","tileType":"","element":"tile-4-24"},"tile-4-25":{"x":"4","y":"25","tileType":"","element":"tile-4-25"},"tile-4-26":{"x":"4","y":"26","tileType":"","element":"tile-4-26"},"tile-4-27":{"x":"4","y":"27","tileType":"","element":"tile-4-27"},"tile-4-28":{"x":"4","y":"28","tileType":"","element":"tile-4-28"},"tile-4-29":{"x":"4","y":"29","tileType":"","element":"tile-4-29"},"tile-5-0":{"x":"5","y":"0","tileType":"","element":"tile-5-0"},"tile-5-1":{"x":"5","y":"1","tileType":"","element":"tile-5-1"},"tile-5-2":{"x":"5","y":"2","tileType":"","element":"tile-5-2"},"tile-5-3":{"x":"5","y":"3","tileType":"","element":"tile-5-3"},"tile-5-4":{"x":"5","y":"4","tileType":"","element":"tile-5-4"},"tile-5-5":{"x":"5","y":"5","tileType":"","element":"tile-5-5"},"tile-5-6":{"x":"5","y":"6","tileType":"","element":"tile-5-6"},"tile-5-7":{"x":"5","y":"7","tileType":"","element":"tile-5-7"},"tile-5-8":{"x":"5","y":"8","tileType":"","element":"tile-5-8"},"tile-5-9":{"x":"5","y":"9","tileType":"","element":"tile-5-9"},"tile-5-10":{"x":"5","y":"10","tileType":"","element":"tile-5-10"},"tile-5-11":{"x":"5","y":"11","tileType":"","element":"tile-5-11"},"tile-5-12":{"x":"5","y":"12","tileType":"","element":"tile-5-12"},"tile-5-13":{"x":"5","y":"13","tileType":"","element":"tile-5-13"},"tile-5-14":{"x":"5","y":"14","tileType":"","element":"tile-5-14"},"tile-5-15":{"x":"5","y":"15","tileType":"","element":"tile-5-15"},"tile-5-16":{"x":"5","y":"16","tileType":"","element":"tile-5-16"},"tile-5-17":{"x":"5","y":"17","tileType":"","element":"tile-5-17"},"tile-5-18":{"x":"5","y":"18","tileType":"","element":"tile-5-18"},"tile-5-19":{"x":"5","y":"19","tileType":"","element":"tile-5-19"},"tile-5-20":{"x":"5","y":"20","tileType":"","element":"tile-5-20"},"tile-5-21":{"x":"5","y":"21","tileType":"","element":"tile-5-21"},"tile-5-22":{"x":"5","y":"22","tileType":"","element":"tile-5-22"},"tile-5-23":{"x":"5","y":"23","tileType":"","element":"tile-5-23"},"tile-5-24":{"x":"5","y":"24","tileType":"","element":"tile-5-24"},"tile-5-25":{"x":"5","y":"25","tileType":"","element":"tile-5-25"},"tile-5-26":{"x":"5","y":"26","tileType":"","element":"tile-5-26"},"tile-5-27":{"x":"5","y":"27","tileType":"","element":"tile-5-27"},"tile-5-28":{"x":"5","y":"28","tileType":"","element":"tile-5-28"},"tile-5-29":{"x":"5","y":"29","tileType":"","element":"tile-5-29"},"tile-6-0":{"x":"6","y":"0","tileType":"","element":"tile-6-0"},"tile-6-1":{"x":"6","y":"1","tileType":"","element":"tile-6-1"},"tile-6-2":{"x":"6","y":"2","tileType":"","element":"tile-6-2"},"tile-6-3":{"x":"6","y":"3","tileType":"","element":"tile-6-3"},"tile-6-4":{"x":"6","y":"4","tileType":"","element":"tile-6-4"},"tile-6-5":{"x":"6","y":"5","tileType":"","element":"tile-6-5"},"tile-6-6":{"x":"6","y":"6","tileType":"","element":"tile-6-6"},"tile-6-7":{"x":"6","y":"7","tileType":"","element":"tile-6-7"},"tile-6-8":{"x":"6","y":"8","tileType":"","element":"tile-6-8"},"tile-6-9":{"x":"6","y":"9","tileType":"","element":"tile-6-9"},"tile-6-10":{"x":"6","y":"10","tileType":"","element":"tile-6-10"},"tile-6-11":{"x":"6","y":"11","tileType":"","element":"tile-6-11"},"tile-6-12":{"x":"6","y":"12","tileType":"","element":"tile-6-12"},"tile-6-13":{"x":"6","y":"13","tileType":"","element":"tile-6-13"},"tile-6-14":{"x":"6","y":"14","tileType":"","element":"tile-6-14"},"tile-6-15":{"x":"6","y":"15","tileType":"","element":"tile-6-15"},"tile-6-16":{"x":"6","y":"16","tileType":"","element":"tile-6-16"},"tile-6-17":{"x":"6","y":"17","tileType":"","element":"tile-6-17"},"tile-6-18":{"x":"6","y":"18","tileType":"","element":"tile-6-18"},"tile-6-19":{"x":"6","y":"19","tileType":"","element":"tile-6-19"},"tile-6-20":{"x":"6","y":"20","tileType":"","element":"tile-6-20"},"tile-6-21":{"x":"6","y":"21","tileType":"","element":"tile-6-21"},"tile-6-22":{"x":"6","y":"22","tileType":"leaf","element":"tile-6-22"},"tile-6-23":{"x":"6","y":"23","tileType":"leaf","element":"tile-6-23"},"tile-6-24":{"x":"6","y":"24","tileType":"leaf","element":"tile-6-24"},"tile-6-25":{"x":"6","y":"25","tileType":"leaf","element":"tile-6-25"},"tile-6-26":{"x":"6","y":"26","tileType":"","element":"tile-6-26"},"tile-6-27":{"x":"6","y":"27","tileType":"","element":"tile-6-27"},"tile-6-28":{"x":"6","y":"28","tileType":"","element":"tile-6-28"},"tile-6-29":{"x":"6","y":"29","tileType":"","element":"tile-6-29"},"tile-7-0":{"x":"7","y":"0","tileType":"","element":"tile-7-0"},"tile-7-1":{"x":"7","y":"1","tileType":"","element":"tile-7-1"},"tile-7-2":{"x":"7","y":"2","tileType":"","element":"tile-7-2"},"tile-7-3":{"x":"7","y":"3","tileType":"","element":"tile-7-3"},"tile-7-4":{"x":"7","y":"4","tileType":"","element":"tile-7-4"},"tile-7-5":{"x":"7","y":"5","tileType":"","element":"tile-7-5"},"tile-7-6":{"x":"7","y":"6","tileType":"leaf","element":"tile-7-6"},"tile-7-7":{"x":"7","y":"7","tileType":"","element":"tile-7-7"},"tile-7-8":{"x":"7","y":"8","tileType":"","element":"tile-7-8"},"tile-7-9":{"x":"7","y":"9","tileType":"","element":"tile-7-9"},"tile-7-10":{"x":"7","y":"10","tileType":"","element":"tile-7-10"},"tile-7-11":{"x":"7","y":"11","tileType":"","element":"tile-7-11"},"tile-7-12":{"x":"7","y":"12","tileType":"","element":"tile-7-12"},"tile-7-13":{"x":"7","y":"13","tileType":"","element":"tile-7-13"},"tile-7-14":{"x":"7","y":"14","tileType":"","element":"tile-7-14"},"tile-7-15":{"x":"7","y":"15","tileType":"","element":"tile-7-15"},"tile-7-16":{"x":"7","y":"16","tileType":"","element":"tile-7-16"},"tile-7-17":{"x":"7","y":"17","tileType":"","element":"tile-7-17"},"tile-7-18":{"x":"7","y":"18","tileType":"","element":"tile-7-18"},"tile-7-19":{"x":"7","y":"19","tileType":"","element":"tile-7-19"},"tile-7-20":{"x":"7","y":"20","tileType":"","element":"tile-7-20"},"tile-7-21":{"x":"7","y":"21","tileType":"","element":"tile-7-21"},"tile-7-22":{"x":"7","y":"22","tileType":"leaf","element":"tile-7-22"},"tile-7-23":{"x":"7","y":"23","tileType":"leaf","element":"tile-7-23"},"tile-7-24":{"x":"7","y":"24","tileType":"leaf","element":"tile-7-24"},"tile-7-25":{"x":"7","y":"25","tileType":"leaf","element":"tile-7-25"},"tile-7-26":{"x":"7","y":"26","tileType":"","element":"tile-7-26"},"tile-7-27":{"x":"7","y":"27","tileType":"","element":"tile-7-27"},"tile-7-28":{"x":"7","y":"28","tileType":"","element":"tile-7-28"},"tile-7-29":{"x":"7","y":"29","tileType":"","element":"tile-7-29"},"tile-8-0":{"x":"8","y":"0","tileType":"","element":"tile-8-0"},"tile-8-1":{"x":"8","y":"1","tileType":"","element":"tile-8-1"},"tile-8-2":{"x":"8","y":"2","tileType":"","element":"tile-8-2"},"tile-8-3":{"x":"8","y":"3","tileType":"","element":"tile-8-3"},"tile-8-4":{"x":"8","y":"4","tileType":"","element":"tile-8-4"},"tile-8-5":{"x":"8","y":"5","tileType":"leaf","element":"tile-8-5"},"tile-8-6":{"x":"8","y":"6","tileType":"leaf","element":"tile-8-6"},"tile-8-7":{"x":"8","y":"7","tileType":"leaf","element":"tile-8-7"},"tile-8-8":{"x":"8","y":"8","tileType":"","element":"tile-8-8"},"tile-8-9":{"x":"8","y":"9","tileType":"","element":"tile-8-9"},"tile-8-10":{"x":"8","y":"10","tileType":"","element":"tile-8-10"},"tile-8-11":{"x":"8","y":"11","tileType":"","element":"tile-8-11"},"tile-8-12":{"x":"8","y":"12","tileType":"","element":"tile-8-12"},"tile-8-13":{"x":"8","y":"13","tileType":"","element":"tile-8-13"},"tile-8-14":{"x":"8","y":"14","tileType":"","element":"tile-8-14"},"tile-8-15":{"x":"8","y":"15","tileType":"","element":"tile-8-15"},"tile-8-16":{"x":"8","y":"16","tileType":"","element":"tile-8-16"},"tile-8-17":{"x":"8","y":"17","tileType":"","element":"tile-8-17"},"tile-8-18":{"x":"8","y":"18","tileType":"","element":"tile-8-18"},"tile-8-19":{"x":"8","y":"19","tileType":"","element":"tile-8-19"},"tile-8-20":{"x":"8","y":"20","tileType":"","element":"tile-8-20"},"tile-8-21":{"x":"8","y":"21","tileType":"","element":"tile-8-21"},"tile-8-22":{"x":"8","y":"22","tileType":"leaf","element":"tile-8-22"},"tile-8-23":{"x":"8","y":"23","tileType":"leaf","element":"tile-8-23"},"tile-8-24":{"x":"8","y":"24","tileType":"leaf","element":"tile-8-24"},"tile-8-25":{"x":"8","y":"25","tileType":"leaf","element":"tile-8-25"},"tile-8-26":{"x":"8","y":"26","tileType":"","element":"tile-8-26"},"tile-8-27":{"x":"8","y":"27","tileType":"","element":"tile-8-27"},"tile-8-28":{"x":"8","y":"28","tileType":"","element":"tile-8-28"},"tile-8-29":{"x":"8","y":"29","tileType":"","element":"tile-8-29"},"tile-9-0":{"x":"9","y":"0","tileType":"","element":"tile-9-0"},"tile-9-1":{"x":"9","y":"1","tileType":"","element":"tile-9-1"},"tile-9-2":{"x":"9","y":"2","tileType":"","element":"tile-9-2"},"tile-9-3":{"x":"9","y":"3","tileType":"","element":"tile-9-3"},"tile-9-4":{"x":"9","y":"4","tileType":"","element":"tile-9-4"},"tile-9-5":{"x":"9","y":"5","tileType":"leaf","element":"tile-9-5"},"tile-9-6":{"x":"9","y":"6","tileType":"leaf","element":"tile-9-6"},"tile-9-7":{"x":"9","y":"7","tileType":"leaf","element":"tile-9-7"},"tile-9-8":{"x":"9","y":"8","tileType":"","element":"tile-9-8"},"tile-9-9":{"x":"9","y":"9","tileType":"","element":"tile-9-9"},"tile-9-10":{"x":"9","y":"10","tileType":"","element":"tile-9-10"},"tile-9-11":{"x":"9","y":"11","tileType":"","element":"tile-9-11"},"tile-9-12":{"x":"9","y":"12","tileType":"","element":"tile-9-12"},"tile-9-13":{"x":"9","y":"13","tileType":"","element":"tile-9-13"},"tile-9-14":{"x":"9","y":"14","tileType":"","element":"tile-9-14"},"tile-9-15":{"x":"9","y":"15","tileType":"","element":"tile-9-15"},"tile-9-16":{"x":"9","y":"16","tileType":"","element":"tile-9-16"},"tile-9-17":{"x":"9","y":"17","tileType":"","element":"tile-9-17"},"tile-9-18":{"x":"9","y":"18","tileType":"","element":"tile-9-18"},"tile-9-19":{"x":"9","y":"19","tileType":"","element":"tile-9-19"},"tile-9-20":{"x":"9","y":"20","tileType":"","element":"tile-9-20"},"tile-9-21":{"x":"9","y":"21","tileType":"","element":"tile-9-21"},"tile-9-22":{"x":"9","y":"22","tileType":"leaf","element":"tile-9-22"},"tile-9-23":{"x":"9","y":"23","tileType":"leaf","element":"tile-9-23"},"tile-9-24":{"x":"9","y":"24","tileType":"leaf","element":"tile-9-24"},"tile-9-25":{"x":"9","y":"25","tileType":"leaf","element":"tile-9-25"},"tile-9-26":{"x":"9","y":"26","tileType":"","element":"tile-9-26"},"tile-9-27":{"x":"9","y":"27","tileType":"","element":"tile-9-27"},"tile-9-28":{"x":"9","y":"28","tileType":"","element":"tile-9-28"},"tile-9-29":{"x":"9","y":"29","tileType":"","element":"tile-9-29"},"tile-10-0":{"x":"10","y":"0","tileType":"","element":"tile-10-0"},"tile-10-1":{"x":"10","y":"1","tileType":"","element":"tile-10-1"},"tile-10-2":{"x":"10","y":"2","tileType":"","element":"tile-10-2"},"tile-10-3":{"x":"10","y":"3","tileType":"","element":"tile-10-3"},"tile-10-4":{"x":"10","y":"4","tileType":"","element":"tile-10-4"},"tile-10-5":{"x":"10","y":"5","tileType":"leaf","element":"tile-10-5"},"tile-10-6":{"x":"10","y":"6","tileType":"leaf","element":"tile-10-6"},"tile-10-7":{"x":"10","y":"7","tileType":"leaf","element":"tile-10-7"},"tile-10-8":{"x":"10","y":"8","tileType":"","element":"tile-10-8"},"tile-10-9":{"x":"10","y":"9","tileType":"","element":"tile-10-9"},"tile-10-10":{"x":"10","y":"10","tileType":"","element":"tile-10-10"},"tile-10-11":{"x":"10","y":"11","tileType":"","element":"tile-10-11"},"tile-10-12":{"x":"10","y":"12","tileType":"","element":"tile-10-12"},"tile-10-13":{"x":"10","y":"13","tileType":"","element":"tile-10-13"},"tile-10-14":{"x":"10","y":"14","tileType":"","element":"tile-10-14"},"tile-10-15":{"x":"10","y":"15","tileType":"","element":"tile-10-15"},"tile-10-16":{"x":"10","y":"16","tileType":"","element":"tile-10-16"},"tile-10-17":{"x":"10","y":"17","tileType":"","element":"tile-10-17"},"tile-10-18":{"x":"10","y":"18","tileType":"","element":"tile-10-18"},"tile-10-19":{"x":"10","y":"19","tileType":"","element":"tile-10-19"},"tile-10-20":{"x":"10","y":"20","tileType":"","element":"tile-10-20"},"tile-10-21":{"x":"10","y":"21","tileType":"","element":"tile-10-21"},"tile-10-22":{"x":"10","y":"22","tileType":"","element":"tile-10-22"},"tile-10-23":{"x":"10","y":"23","tileType":"tree","element":"tile-10-23"},"tile-10-24":{"x":"10","y":"24","tileType":"tree","element":"tile-10-24"},"tile-10-25":{"x":"10","y":"25","tileType":"","element":"tile-10-25"},"tile-10-26":{"x":"10","y":"26","tileType":"","element":"tile-10-26"},"tile-10-27":{"x":"10","y":"27","tileType":"","element":"tile-10-27"},"tile-10-28":{"x":"10","y":"28","tileType":"","element":"tile-10-28"},"tile-10-29":{"x":"10","y":"29","tileType":"","element":"tile-10-29"},"tile-11-0":{"x":"11","y":"0","tileType":"","element":"tile-11-0"},"tile-11-1":{"x":"11","y":"1","tileType":"","element":"tile-11-1"},"tile-11-2":{"x":"11","y":"2","tileType":"","element":"tile-11-2"},"tile-11-3":{"x":"11","y":"3","tileType":"","element":"tile-11-3"},"tile-11-4":{"x":"11","y":"4","tileType":"","element":"tile-11-4"},"tile-11-5":{"x":"11","y":"5","tileType":"","element":"tile-11-5"},"tile-11-6":{"x":"11","y":"6","tileType":"tree","element":"tile-11-6"},"tile-11-7":{"x":"11","y":"7","tileType":"","element":"tile-11-7"},"tile-11-8":{"x":"11","y":"8","tileType":"","element":"tile-11-8"},"tile-11-9":{"x":"11","y":"9","tileType":"","element":"tile-11-9"},"tile-11-10":{"x":"11","y":"10","tileType":"","element":"tile-11-10"},"tile-11-11":{"x":"11","y":"11","tileType":"","element":"tile-11-11"},"tile-11-12":{"x":"11","y":"12","tileType":"leaf","element":"tile-11-12"},"tile-11-13":{"x":"11","y":"13","tileType":"leaf","element":"tile-11-13"},"tile-11-14":{"x":"11","y":"14","tileType":"leaf","element":"tile-11-14"},"tile-11-15":{"x":"11","y":"15","tileType":"","element":"tile-11-15"},"tile-11-16":{"x":"11","y":"16","tileType":"","element":"tile-11-16"},"tile-11-17":{"x":"11","y":"17","tileType":"","element":"tile-11-17"},"tile-11-18":{"x":"11","y":"18","tileType":"","element":"tile-11-18"},"tile-11-19":{"x":"11","y":"19","tileType":"","element":"tile-11-19"},"tile-11-20":{"x":"11","y":"20","tileType":"","element":"tile-11-20"},"tile-11-21":{"x":"11","y":"21","tileType":"","element":"tile-11-21"},"tile-11-22":{"x":"11","y":"22","tileType":"","element":"tile-11-22"},"tile-11-23":{"x":"11","y":"23","tileType":"tree","element":"tile-11-23"},"tile-11-24":{"x":"11","y":"24","tileType":"tree","element":"tile-11-24"},"tile-11-25":{"x":"11","y":"25","tileType":"","element":"tile-11-25"},"tile-11-26":{"x":"11","y":"26","tileType":"","element":"tile-11-26"},"tile-11-27":{"x":"11","y":"27","tileType":"","element":"tile-11-27"},"tile-11-28":{"x":"11","y":"28","tileType":"","element":"tile-11-28"},"tile-11-29":{"x":"11","y":"29","tileType":"","element":"tile-11-29"},"tile-12-0":{"x":"12","y":"0","tileType":"","element":"tile-12-0"},"tile-12-1":{"x":"12","y":"1","tileType":"","element":"tile-12-1"},"tile-12-2":{"x":"12","y":"2","tileType":"","element":"tile-12-2"},"tile-12-3":{"x":"12","y":"3","tileType":"","element":"tile-12-3"},"tile-12-4":{"x":"12","y":"4","tileType":"","element":"tile-12-4"},"tile-12-5":{"x":"12","y":"5","tileType":"","element":"tile-12-5"},"tile-12-6":{"x":"12","y":"6","tileType":"tree","element":"tile-12-6"},"tile-12-7":{"x":"12","y":"7","tileType":"","element":"tile-12-7"},"tile-12-8":{"x":"12","y":"8","tileType":"","element":"tile-12-8"},"tile-12-9":{"x":"12","y":"9","tileType":"","element":"tile-12-9"},"tile-12-10":{"x":"12","y":"10","tileType":"rock","element":"tile-12-10"},"tile-12-11":{"x":"12","y":"11","tileType":"rock","element":"tile-12-11"},"tile-12-12":{"x":"12","y":"12","tileType":"leaf","element":"tile-12-12"},"tile-12-13":{"x":"12","y":"13","tileType":"rock","element":"tile-12-13"},"tile-12-14":{"x":"12","y":"14","tileType":"leaf","element":"tile-12-14"},"tile-12-15":{"x":"12","y":"15","tileType":"rock","element":"tile-12-15"},"tile-12-16":{"x":"12","y":"16","tileType":"rock","element":"tile-12-16"},"tile-12-17":{"x":"12","y":"17","tileType":"","element":"tile-12-17"},"tile-12-18":{"x":"12","y":"18","tileType":"","element":"tile-12-18"},"tile-12-19":{"x":"12","y":"19","tileType":"","element":"tile-12-19"},"tile-12-20":{"x":"12","y":"20","tileType":"","element":"tile-12-20"},"tile-12-21":{"x":"12","y":"21","tileType":"","element":"tile-12-21"},"tile-12-22":{"x":"12","y":"22","tileType":"","element":"tile-12-22"},"tile-12-23":{"x":"12","y":"23","tileType":"tree","element":"tile-12-23"},"tile-12-24":{"x":"12","y":"24","tileType":"tree","element":"tile-12-24"},"tile-12-25":{"x":"12","y":"25","tileType":"","element":"tile-12-25"},"tile-12-26":{"x":"12","y":"26","tileType":"","element":"tile-12-26"},"tile-12-27":{"x":"12","y":"27","tileType":"","element":"tile-12-27"},"tile-12-28":{"x":"12","y":"28","tileType":"","element":"tile-12-28"},"tile-12-29":{"x":"12","y":"29","tileType":"rock","element":"tile-12-29"},"tile-13-0":{"x":"13","y":"0","tileType":"","element":"tile-13-0"},"tile-13-1":{"x":"13","y":"1","tileType":"","element":"tile-13-1"},"tile-13-2":{"x":"13","y":"2","tileType":"","element":"tile-13-2"},"tile-13-3":{"x":"13","y":"3","tileType":"","element":"tile-13-3"},"tile-13-4":{"x":"13","y":"4","tileType":"","element":"tile-13-4"},"tile-13-5":{"x":"13","y":"5","tileType":"","element":"tile-13-5"},"tile-13-6":{"x":"13","y":"6","tileType":"tree","element":"tile-13-6"},"tile-13-7":{"x":"13","y":"7","tileType":"","element":"tile-13-7"},"tile-13-8":{"x":"13","y":"8","tileType":"","element":"tile-13-8"},"tile-13-9":{"x":"13","y":"9","tileType":"","element":"tile-13-9"},"tile-13-10":{"x":"13","y":"10","tileType":"rock","element":"tile-13-10"},"tile-13-11":{"x":"13","y":"11","tileType":"rock","element":"tile-13-11"},"tile-13-12":{"x":"13","y":"12","tileType":"rock","element":"tile-13-12"},"tile-13-13":{"x":"13","y":"13","tileType":"rock","element":"tile-13-13"},"tile-13-14":{"x":"13","y":"14","tileType":"rock","element":"tile-13-14"},"tile-13-15":{"x":"13","y":"15","tileType":"rock","element":"tile-13-15"},"tile-13-16":{"x":"13","y":"16","tileType":"rock","element":"tile-13-16"},"tile-13-17":{"x":"13","y":"17","tileType":"","element":"tile-13-17"},"tile-13-18":{"x":"13","y":"18","tileType":"","element":"tile-13-18"},"tile-13-19":{"x":"13","y":"19","tileType":"","element":"tile-13-19"},"tile-13-20":{"x":"13","y":"20","tileType":"","element":"tile-13-20"},"tile-13-21":{"x":"13","y":"21","tileType":"","element":"tile-13-21"},"tile-13-22":{"x":"13","y":"22","tileType":"","element":"tile-13-22"},"tile-13-23":{"x":"13","y":"23","tileType":"tree","element":"tile-13-23"},"tile-13-24":{"x":"13","y":"24","tileType":"tree","element":"tile-13-24"},"tile-13-25":{"x":"13","y":"25","tileType":"","element":"tile-13-25"},"tile-13-26":{"x":"13","y":"26","tileType":"","element":"tile-13-26"},"tile-13-27":{"x":"13","y":"27","tileType":"","element":"tile-13-27"},"tile-13-28":{"x":"13","y":"28","tileType":"rock","element":"tile-13-28"},"tile-13-29":{"x":"13","y":"29","tileType":"rock","element":"tile-13-29"},"tile-14-0":{"x":"14","y":"0","tileType":"grass","element":"tile-14-0"},"tile-14-1":{"x":"14","y":"1","tileType":"grass","element":"tile-14-1"},"tile-14-2":{"x":"14","y":"2","tileType":"grass","element":"tile-14-2"},"tile-14-3":{"x":"14","y":"3","tileType":"grass","element":"tile-14-3"},"tile-14-4":{"x":"14","y":"4","tileType":"grass","element":"tile-14-4"},"tile-14-5":{"x":"14","y":"5","tileType":"grass","element":"tile-14-5"},"tile-14-6":{"x":"14","y":"6","tileType":"grass","element":"tile-14-6"},"tile-14-7":{"x":"14","y":"7","tileType":"grass","element":"tile-14-7"},"tile-14-8":{"x":"14","y":"8","tileType":"grass","element":"tile-14-8"},"tile-14-9":{"x":"14","y":"9","tileType":"grass","element":"tile-14-9"},"tile-14-10":{"x":"14","y":"10","tileType":"grass","element":"tile-14-10"},"tile-14-11":{"x":"14","y":"11","tileType":"grass","element":"tile-14-11"},"tile-14-12":{"x":"14","y":"12","tileType":"grass","element":"tile-14-12"},"tile-14-13":{"x":"14","y":"13","tileType":"grass","element":"tile-14-13"},"tile-14-14":{"x":"14","y":"14","tileType":"grass","element":"tile-14-14"},"tile-14-15":{"x":"14","y":"15","tileType":"grass","element":"tile-14-15"},"tile-14-16":{"x":"14","y":"16","tileType":"grass","element":"tile-14-16"},"tile-14-17":{"x":"14","y":"17","tileType":"grass","element":"tile-14-17"},"tile-14-18":{"x":"14","y":"18","tileType":"grass","element":"tile-14-18"},"tile-14-19":{"x":"14","y":"19","tileType":"grass","element":"tile-14-19"},"tile-14-20":{"x":"14","y":"20","tileType":"grass","element":"tile-14-20"},"tile-14-21":{"x":"14","y":"21","tileType":"grass","element":"tile-14-21"},"tile-14-22":{"x":"14","y":"22","tileType":"grass","element":"tile-14-22"},"tile-14-23":{"x":"14","y":"23","tileType":"grass","element":"tile-14-23"},"tile-14-24":{"x":"14","y":"24","tileType":"grass","element":"tile-14-24"},"tile-14-25":{"x":"14","y":"25","tileType":"grass","element":"tile-14-25"},"tile-14-26":{"x":"14","y":"26","tileType":"grass","element":"tile-14-26"},"tile-14-27":{"x":"14","y":"27","tileType":"grass","element":"tile-14-27"},"tile-14-28":{"x":"14","y":"28","tileType":"grass","element":"tile-14-28"},"tile-14-29":{"x":"14","y":"29","tileType":"grass","element":"tile-14-29"},"tile-15-0":{"x":"15","y":"0","tileType":"dirt","element":"tile-15-0"},"tile-15-1":{"x":"15","y":"1","tileType":"dirt","element":"tile-15-1"},"tile-15-2":{"x":"15","y":"2","tileType":"dirt","element":"tile-15-2"},"tile-15-3":{"x":"15","y":"3","tileType":"dirt","element":"tile-15-3"},"tile-15-4":{"x":"15","y":"4","tileType":"dirt","element":"tile-15-4"},"tile-15-5":{"x":"15","y":"5","tileType":"dirt","element":"tile-15-5"},"tile-15-6":{"x":"15","y":"6","tileType":"dirt","element":"tile-15-6"},"tile-15-7":{"x":"15","y":"7","tileType":"dirt","element":"tile-15-7"},"tile-15-8":{"x":"15","y":"8","tileType":"dirt","element":"tile-15-8"},"tile-15-9":{"x":"15","y":"9","tileType":"dirt","element":"tile-15-9"},"tile-15-10":{"x":"15","y":"10","tileType":"dirt","element":"tile-15-10"},"tile-15-11":{"x":"15","y":"11","tileType":"dirt","element":"tile-15-11"},"tile-15-12":{"x":"15","y":"12","tileType":"dirt","element":"tile-15-12"},"tile-15-13":{"x":"15","y":"13","tileType":"dirt","element":"tile-15-13"},"tile-15-14":{"x":"15","y":"14","tileType":"dirt","element":"tile-15-14"},"tile-15-15":{"x":"15","y":"15","tileType":"dirt","element":"tile-15-15"},"tile-15-16":{"x":"15","y":"16","tileType":"dirt","element":"tile-15-16"},"tile-15-17":{"x":"15","y":"17","tileType":"dirt","element":"tile-15-17"},"tile-15-18":{"x":"15","y":"18","tileType":"dirt","element":"tile-15-18"},"tile-15-19":{"x":"15","y":"19","tileType":"dirt","element":"tile-15-19"},"tile-15-20":{"x":"15","y":"20","tileType":"dirt","element":"tile-15-20"},"tile-15-21":{"x":"15","y":"21","tileType":"dirt","element":"tile-15-21"},"tile-15-22":{"x":"15","y":"22","tileType":"dirt","element":"tile-15-22"},"tile-15-23":{"x":"15","y":"23","tileType":"dirt","element":"tile-15-23"},"tile-15-24":{"x":"15","y":"24","tileType":"dirt","element":"tile-15-24"},"tile-15-25":{"x":"15","y":"25","tileType":"dirt","element":"tile-15-25"},"tile-15-26":{"x":"15","y":"26","tileType":"dirt","element":"tile-15-26"},"tile-15-27":{"x":"15","y":"27","tileType":"dirt","element":"tile-15-27"},"tile-15-28":{"x":"15","y":"28","tileType":"dirt","element":"tile-15-28"},"tile-15-29":{"x":"15","y":"29","tileType":"dirt","element":"tile-15-29"},"tile-16-0":{"x":"16","y":"0","tileType":"dirt","element":"tile-16-0"},"tile-16-1":{"x":"16","y":"1","tileType":"dirt","element":"tile-16-1"},"tile-16-2":{"x":"16","y":"2","tileType":"dirt","element":"tile-16-2"},"tile-16-3":{"x":"16","y":"3","tileType":"dirt","element":"tile-16-3"},"tile-16-4":{"x":"16","y":"4","tileType":"dirt","element":"tile-16-4"},"tile-16-5":{"x":"16","y":"5","tileType":"dirt","element":"tile-16-5"},"tile-16-6":{"x":"16","y":"6","tileType":"dirt","element":"tile-16-6"},"tile-16-7":{"x":"16","y":"7","tileType":"dirt","element":"tile-16-7"},"tile-16-8":{"x":"16","y":"8","tileType":"dirt","element":"tile-16-8"},"tile-16-9":{"x":"16","y":"9","tileType":"dirt","element":"tile-16-9"},"tile-16-10":{"x":"16","y":"10","tileType":"dirt","element":"tile-16-10"},"tile-16-11":{"x":"16","y":"11","tileType":"dirt","element":"tile-16-11"},"tile-16-12":{"x":"16","y":"12","tileType":"dirt","element":"tile-16-12"},"tile-16-13":{"x":"16","y":"13","tileType":"dirt","element":"tile-16-13"},"tile-16-14":{"x":"16","y":"14","tileType":"dirt","element":"tile-16-14"},"tile-16-15":{"x":"16","y":"15","tileType":"dirt","element":"tile-16-15"},"tile-16-16":{"x":"16","y":"16","tileType":"dirt","element":"tile-16-16"},"tile-16-17":{"x":"16","y":"17","tileType":"dirt","element":"tile-16-17"},"tile-16-18":{"x":"16","y":"18","tileType":"dirt","element":"tile-16-18"},"tile-16-19":{"x":"16","y":"19","tileType":"dirt","element":"tile-16-19"},"tile-16-20":{"x":"16","y":"20","tileType":"dirt","element":"tile-16-20"},"tile-16-21":{"x":"16","y":"21","tileType":"dirt","element":"tile-16-21"},"tile-16-22":{"x":"16","y":"22","tileType":"dirt","element":"tile-16-22"},"tile-16-23":{"x":"16","y":"23","tileType":"dirt","element":"tile-16-23"},"tile-16-24":{"x":"16","y":"24","tileType":"dirt","element":"tile-16-24"},"tile-16-25":{"x":"16","y":"25","tileType":"dirt","element":"tile-16-25"},"tile-16-26":{"x":"16","y":"26","tileType":"dirt","element":"tile-16-26"},"tile-16-27":{"x":"16","y":"27","tileType":"dirt","element":"tile-16-27"},"tile-16-28":{"x":"16","y":"28","tileType":"dirt","element":"tile-16-28"},"tile-16-29":{"x":"16","y":"29","tileType":"dirt","element":"tile-16-29"},"tile-17-0":{"x":"17","y":"0","tileType":"dirt","element":"tile-17-0"},"tile-17-1":{"x":"17","y":"1","tileType":"dirt","element":"tile-17-1"},"tile-17-2":{"x":"17","y":"2","tileType":"dirt","element":"tile-17-2"},"tile-17-3":{"x":"17","y":"3","tileType":"dirt","element":"tile-17-3"},"tile-17-4":{"x":"17","y":"4","tileType":"dirt","element":"tile-17-4"},"tile-17-5":{"x":"17","y":"5","tileType":"dirt","element":"tile-17-5"},"tile-17-6":{"x":"17","y":"6","tileType":"dirt","element":"tile-17-6"},"tile-17-7":{"x":"17","y":"7","tileType":"dirt","element":"tile-17-7"},"tile-17-8":{"x":"17","y":"8","tileType":"dirt","element":"tile-17-8"},"tile-17-9":{"x":"17","y":"9","tileType":"dirt","element":"tile-17-9"},"tile-17-10":{"x":"17","y":"10","tileType":"dirt","element":"tile-17-10"},"tile-17-11":{"x":"17","y":"11","tileType":"dirt","element":"tile-17-11"},"tile-17-12":{"x":"17","y":"12","tileType":"dirt","element":"tile-17-12"},"tile-17-13":{"x":"17","y":"13","tileType":"dirt","element":"tile-17-13"},"tile-17-14":{"x":"17","y":"14","tileType":"dirt","element":"tile-17-14"},"tile-17-15":{"x":"17","y":"15","tileType":"dirt","element":"tile-17-15"},"tile-17-16":{"x":"17","y":"16","tileType":"dirt","element":"tile-17-16"},"tile-17-17":{"x":"17","y":"17","tileType":"dirt","element":"tile-17-17"},"tile-17-18":{"x":"17","y":"18","tileType":"dirt","element":"tile-17-18"},"tile-17-19":{"x":"17","y":"19","tileType":"dirt","element":"tile-17-19"},"tile-17-20":{"x":"17","y":"20","tileType":"dirt","element":"tile-17-20"},"tile-17-21":{"x":"17","y":"21","tileType":"dirt","element":"tile-17-21"},"tile-17-22":{"x":"17","y":"22","tileType":"dirt","element":"tile-17-22"},"tile-17-23":{"x":"17","y":"23","tileType":"dirt","element":"tile-17-23"},"tile-17-24":{"x":"17","y":"24","tileType":"dirt","element":"tile-17-24"},"tile-17-25":{"x":"17","y":"25","tileType":"dirt","element":"tile-17-25"},"tile-17-26":{"x":"17","y":"26","tileType":"dirt","element":"tile-17-26"},"tile-17-27":{"x":"17","y":"27","tileType":"dirt","element":"tile-17-27"},"tile-17-28":{"x":"17","y":"28","tileType":"dirt","element":"tile-17-28"},"tile-17-29":{"x":"17","y":"29","tileType":"dirt","element":"tile-17-29"}};