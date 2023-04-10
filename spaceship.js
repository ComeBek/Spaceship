function my_spaceship(path){
    var x = 0; y = 0; direction = 'up';
   
    for (i = 0; i < path.length; i++){

        if (path[i] == 'R') {
             
            switch (direction){
                case 'up':
                    direction = 'right';
                    break;
                case 'right':
                    direction = 'down';
                    break;
                case 'down':
                    direction = 'left';
                    break;
                case 'left':
                    direction = 'up';
                    break; 
            }
        }   
        if (path[i] == 'L') {
            
            switch (direction){
                case 'up':
                    direction = 'left';
                    break;
                case 'right':
                    direction = 'up';
                    break;
                case 'down':
                    direction = 'right';
                    break;
                case 'left':
                    direction = 'down';
                    break; 
            }
        }
        if (path[i] == 'A') {
            
            switch (direction){
                case 'up':
                    y--;                            
                    break;
                case 'right':
                    x++;
                    break;
                case 'down':
                    y++;
                    break;
                case 'left':
                    x--;
                    break; 
                
           }
            
        }
    }
    // var res = {
        // x: x,
        // y: y,
        // direction: direction
        // return {x, y, direction}
        return `{x: ${x}, y: ${y}, direction: '${direction}'}`
}
    
// console.log(my_spaceship("RAALALL"))