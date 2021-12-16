# Starter Project Winter 2021
This project is meant to be a starting point for homework assignments/projects
It is rails 6 API app with React frontend

### Setup Instructions
TODO

### Libraries
- devise_token_auth
- React (v)
- react-router (v6)
- Faker
- Rails (6.1.4)

### Devise Token Auth Setup
- add devise_token_authto Gemfile
```
gem "devise_token_auth"
$ bundle
$ rails g devise_token_auth:install User api/auth
```
### Add extend Devise::Models to users.rb
```
class User < ActiveRecord::Base
  extend Devise::Models

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
``` 
### create a migration file to add trackable columns to our users table. This is a problem with the conflicting versions of rails and devise_token_auth.
``` 
$ rails g migration add_trackable_to_users
```
### db/migrations/_add_trackable_to_users.rb
```
class AddTrackableToUsers < ActiveRecord::Migration[6.0]
  def change
      ## Trackable
      add_column :users, :sign_in_count, :integer, :default => 0
      add_column :users, :current_sign_in_at, :datetime
      add_column :users, :last_sign_in_at, :datetime
      add_column :users, :current_sign_in_ip, :string
      add_column :users, :last_sign_in_ip, :string
  end
end

$ rails db:migrate
```

### React Router Setup
install react-router-dom
```
$ yarn add react-router-dom
```
setup Index.js
``` javascript
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```
add routes in App.js
```javascript
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/public" element={<Public />} />
      <Route path="/protected" element={<Protected />} />
    </Routes>
  );
}
```


