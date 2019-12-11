function Initiolizer(){
	this.vending = function(){
		Vending.prototype.setChange=function(change){_change= change} 
		Vending.prototype.getChange=function(){return _change} 

		Vending.prototype.setItemNo=function(itemNo){_itemNo= itemNo} 
		Vending.prototype.getItemNo=function(){return itemNo} 

		Vending.prototype.setItemNoList=function(itemNoList){_itemNoList= itemNoList} 
		Vending.prototype.getItemNoList=function(){return _itemNoList} 

		Vending.prototype.setItemList=function(itemList){_itemList= itemList} 
		Vending.prototype.getItemList=function(){return _itemList} 

	}
	


}
function VendingService(){
	this.insertCoin = function(coin){
		
		const init =new Initiolizer()
		init.vending()
		const vm = new Vending()
		vm.setChange(coin)
		
		
		alert(`${vm.getChange()}`)
	}
	this.selectItem = function(itemNo, quantity){}
	this.returnChanger= function(){}
	this.handleOrder= function(quantity,price,itemName){}

}