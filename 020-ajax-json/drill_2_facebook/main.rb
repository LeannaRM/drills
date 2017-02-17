require "sinatra"

get "/" do
    erb :index
end

get "/data" do
    erb :facebookJSON
end