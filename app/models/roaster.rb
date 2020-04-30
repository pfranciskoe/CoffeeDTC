# == Schema Information
#
# Table name: roasters
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  location    :string           not null
#  logo_url    :string           not null
#  lat         :float
#  lng         :float
#  description :string           not null
#  fun_fact    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Roaster < ApplicationRecord
    validates :name, presence:true, uniqueness: true
    validates :location, :logo_url, :description, :fun_fact, presence:true
    has_many :coffees,
    foreign_key: :roaster_id,
    class_name: :Dtcoffee
end
