const service ={
	vending(){
		Vending.prototype.setChange=function(change){_change= change} 
		Vending.prototype.getChange=function(){return _change} 

		Vending.prototype.setItemNo=function(itemNo){_itemNo= itemNo} 
		Vending.prototype.getItemNo=function(){return itemNo} 

		Vending.prototype.setItemNoList=function(itemNoList){_itemNoList= itemNoList} 
		Vending.prototype.getItemNoList=function(){return _itemNoList} 

		Vending.prototype.setItemList=function(itemList){_itemList= itemList} 
		Vending.prototype.getItemList=function(){return _itemList} 

	},
	insertCoin(coin){
		service.vending()
		const vm = new Vending()
		vm.setChange(coin)
		
		
		alert(`${vm.getChange()}`)
	},
	selectItem(itemNo, quantity){
		service.vending()
		const vm = new Vending() 
		let total = vm.getItemList().find(i=>i.id==itemNo).price*quantity
		service.returnChanger(total)
	},
	returnChanger(total){
		service.vending()
		const vm = new Vending()
		
		alert(vm.getChange()-total<0?`잔액부족`:vm.getChange()-total)	
	}
}