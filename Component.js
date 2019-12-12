		const compo = {
			div(id){
				const div = document.createElement('div')
				div.setAttribute('id',id)
				div.setAttribute('style','border : 1px solid black')		
				//div.textContent = text
				return div
			},
			inputText(id,type){
				const input = document.createElement('input')
				input.setAttribute('type',type)
				input.setAttribute('id',id)
				return input

			},
			inputButton(id,type,val){
				const input = document.createElement('input')
				input.setAttribute('type',type)
				input.setAttribute('value',val)
				input.setAttribute('id',id)
				return input

			},
			br(){
				const br = document.createElement('br')
				return br

			}

		}
		
		function InputText(){
			this.make = function(id,type){
			
				
			}
		}
		function InputButton(){
			this.make = function(id,type,val){
				

			}
		}
		function Br(){
			this.make = function(){
				const br = document.createElement('br')
				return br
			}
		}
		function Func02(){
			this.paly = function(){
				if(input ==undefined || input ==null|| input ==''){
					alert('텍스트필드입력')
				}else{
					alert(input.value !== ''?input.value:'먼저입력하시오')
					input.focus()
				}
				choice.value = 0
			}
		}
		function Div(){
			this.make = function(id,text){
				
			}
		}
		 function Factory(type){
				switch(type){
					case 'inputText' : return new InputText()
							
					case 'inputButton' : return new InputButton()
							
					case 'br' : return new Br()
					case 'div' : return new Div()
							

				}

		}  