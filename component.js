(function() {
    function form() {
      var constructor = Reflect.construct(HTMLElement, [], form);
      var shadowRoot = constructor.attachShadow({ mode: 'open' });
  
      var style = document.createElement('style');
      style.textContent = `
      :host {
          color: #333333;
          font: 16px Arial, sans-serif;
        }
      
        p {
          margin: 0;
        }
      
        p + p {
          margin-top: 20px;
        }
      
        a {
          color: #1f66e5;
        }
      
        label {
          display: block;
          margin-bottom: 5px;
        }
      
        input[type="text"],
        input[type="password"] {
          background-color: #eaeaea;
          border: 1px solid grey;
          border-radius: 4px;
          box-sizing: border-box;
          color: inherit;
          font: inherit;
          padding: 10px 10px;
          width: 100%;
        }
      
        input[type="submit"] {
          font: 16px/1.6 Arial, sans-serif;
          color: white;
          background: cornflowerblue;
          border: 1px solid #1f66e5;
          border-radius: 4px;
          padding: 10px 10px;
          width: 100%;
        }
      
        .container {
          max-width: 300px;
          padding: 50px;
          border: 1px solid grey;
        }
      
        .footnote {
          text-align: center;
        }
      `;
      shadowRoot.appendChild(style);
  
      var template = document.createElement('template');
      template.innerHTML = `
        <div class="container">
          <form action="#">
            <h3 class="title"></h3> 
            <p>
              <label for="username">User Name</label>
              <input type="text" id="username" name="username">
            </p>
            <p>
              <label for="password">Password</label>
              <input type="password" id="password" name="password">
            </p>
            <p>
              <input type="submit" value="Login">
            </p>
            <p class="footnote">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      `;
      var content = document.importNode(template.content, true);
      shadowRoot.appendChild(content);
  
      return constructor;
    }
  
    form.prototype = Object.create(HTMLElement.prototype);
    form.prototype.constructor = form;
  
    window.customElements.define('login-form', form);
  
    var loginForm = document.querySelector("login-form");
    var color = loginForm.getAttribute("color");
    var title = loginForm.getAttribute("title");
  
    var titleElement = loginForm.shadowRoot.querySelector(".title");
    var container = loginForm.shadowRoot.querySelector(".container"); 
    titleElement.textContent = title;
    container.style.backgroundColor = color; 
})();
