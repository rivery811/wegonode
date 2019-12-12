		function InputText(){
			this.make = function(){
				const input = document.createElement('input')
				input.setAttribute('type','text')
				input.setAttribute('id','val')
				return input

			}
		}
		function InputButton(){
			this.make = function(){
				const input = document.createElement('input')
				input.setAttribute('type','button')
				input.setAttribute('value','버튼')
				input.setAttribute('id','btn')
				return input

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
		 function Factory(type){
				switch(type){
					case 'inputText' : return new InputText()
							
					case 'inputButton' : return new InputButton()
							
					case 'br' : return new Br()
							

				}

		}  