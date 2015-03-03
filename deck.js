   var shuffle = function(m) {
      var rand, $rand;
  
      rand = Math.floor(Math.random() * m--);
            $('li:eq(' + m + ')').after($('li:eq(' + rand + ')')).insertBefore($('li:eq(' + rand + ')'  ))
  
      if(m) {
            setTimeout(shuffle, 100, m);
        }
      };
      
      shuffle($('.cards').length);
      var button = document.getElementById("button");
        $('.button').on("click", shuffle);
