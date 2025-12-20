let chai: 'masala' | 'lemon' | 'ginger';
function getTea(tea: string) {
  chai = tea as 'masala' | 'lemon' | 'ginger';
  if (chai === 'masala') {
    console.log('you have selected masala chai');
  } else if (chai === 'lemon') {
    console.log('you have selected lemon chai');
  } else if (chai === 'ginger') {
    console.log('you have selected ginger chai');
  } else {
    const exhaustivecheck: never = chai;
  }
}

getTea('masala');
getTea('lemon');
getTea('ginger');

class KhulhadChai{
    server(){
        console.log("Serving chai in khulhad");
    }
}
class CuttingChai{
    server(){
        console.log("Serving cutting chai in glass");
    }
}

function serveChai(tea: KhulhadChai | CuttingChai){
    if(tea instanceof KhulhadChai){
        tea.server();
    }else{
        tea.server();
    }
}

serveChai(new KhulhadChai());
serveChai(new CuttingChai());

type MasalaChai = {
    type: 'masala',
    spiceLevel: 'low' | 'medium' | 'high'
}

type LemonChai = {
    type: 'lemon',
    sugarLevel: 'low' | 'medium' | 'high'
}

type Chai = MasalaChai | LemonChai;
function prepareChai(tea: Chai){
    if(tea.type === 'masala'){
        console.log(`Preparing masala chai with ${tea.spiceLevel} spice level`);
    }else{
        console.log(`Preparing lemon chai with ${tea.sugarLevel} sugar level`);
    }
}

prepareChai({type: 'masala', spiceLevel: 'high'});
prepareChai({type: 'lemon', sugarLevel: 'medium'});
