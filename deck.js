//function Card(r, s) {
//      this.rank = r;
//      this.suit = s;
//      this.toHTML = function() {
//        return "<li class='card'>" + this.rank + "-" + this.suit + "</li>";
//      }
//    }
//  
//    function Deck() {
//      var thisDeck = this;
//      this.suits = ['H','C','D','S'];
//      this.ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//  
//      $.each(this.suits, function() {
//        var suit = this;
//        $.each(thisDeck.ranks, function() {
//        var rank = this;
//        var card = new Card(rank, suit);
//        $('#deck').append(card.toHTML());
//        console.log(suit + rank);
//          });
//        });
//      }
      var shuffle = function(m) {
        var rand, $rand;
  
          rand = Math.floor(Math.random() * m--);
          $('li:eq(' + m + ')').after($('li:eq(' + rand + ')')).insertBefore($('li:eq(' + rand + ')'  ))
  
          if(m) {
              setTimeout(shuffle, 100, m);
        }
      };
      //var deck = new Deck();
      shuffle($('.cards').length);
      var button = document.getElementById("button");
        $('.button').on("click", shuffle);