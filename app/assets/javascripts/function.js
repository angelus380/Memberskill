function myFunction() {
      var a1 = Number(document.getElementById("a1").value)
          a2 = Number(document.getElementById("a2").value)
          a3 = Number(document.getElementById("a3").value)
          a4 = Number(document.getElementById("a4").value)
          b1 = Number(document.getElementById("b1").value)
          b2 = Number(document.getElementById("b2").value)
          b3 = Number(document.getElementById("b3").value)
          b4 = Number(document.getElementById("b4").value)
          c1 = Number(document.getElementById("c1").value)
          c2 = Number(document.getElementById("c2").value)
          c3 = Number(document.getElementById("c3").value)
          c4 = Number(document.getElementById("c4").value)
          d1 = Number(document.getElementById("d1").value)
          d2 = Number(document.getElementById("d2").value)
          d3 = Number(document.getElementById("d3").value)
          d4 = Number(document.getElementById("d4").value)
          e1 = Number(document.getElementById("e1").value)
          e2 = Number(document.getElementById("e2").value)
          e3 = Number(document.getElementById("e3").value)
          e4 = Number(document.getElementById("e4").value)
          f1 = Number(document.getElementById("f1").value)
          f2 = Number(document.getElementById("f2").value)
          f3 = Number(document.getElementById("f3").value)
          f4 = Number(document.getElementById("f4").value)
          g1 = Number(document.getElementById("g1").value)
          g2 = Number(document.getElementById("g2").value)
          g3 = Number(document.getElementById("g3").value)
          g4 = Number(document.getElementById("g4").value)
          h1 = Number(document.getElementById("h1").value)
          h2 = Number(document.getElementById("h2").value)
          h3 = Number(document.getElementById("h3").value)
          h4 = Number(document.getElementById("h4").value)
          sum1 = (a1+a2+a3+a4)
          product1 = (a1*b1)+(a2*b2)+(a3*b3)+(a4*b4)
          total1 = (sum1*5)==0 ? 0 :(product1*100)/(sum1*5)
          sum2 = (c1+c2+c3+c4)
          product2 = (c1*d1)+(c2*d2)+(c3*d3)+(c4*d4)
          total2 = (sum2*5)==0 ? 0 :(product2*100)/(sum2*5)
          sum3 = (e1+e2+e3+e4)
          product3 = (e1*f1)+(e2*f2)+(e3*f3)+(e4*f4)
          total3 = (sum3*5)==0 ? 0 :(product3*100)/(sum3*5)  
          sum4 = (g1+g2+g3+g4)  
          product4 = (g1*h1)+(g2*h2)+(g3*h3)+(g4*h4)
          total4 = (sum4*5)==0 ? 0 :(product4*100)/(sum4*5)
          totalA = (sum1+sum2+sum3+sum4) == 0 ? 0 :((total1*sum1)+(total2*sum2)+(total3*sum3)+(total4*sum4))/(sum1+sum2+sum3+sum4)
      document.getElementById("bill").innerHTML = total1.toFixed(2);
      document.getElementById("steve").innerHTML = total2.toFixed(2);
      document.getElementById("dennis").innerHTML = total3.toFixed(2);
      document.getElementById("bruce").innerHTML = total4.toFixed(2);
      document.getElementById("fit").innerHTML = totalA.toFixed(2);
    }