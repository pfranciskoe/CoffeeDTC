# == Schema Information
#
# Table name: dtcoffees
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  description   :text             not null
#  roaster_id    :integer          not null
#  weight        :integer          not null
#  price         :float            not null
#  single_origin :boolean          not null
#  fair_trade    :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  flavors       :string           not null
#  roast         :integer          not null
#
class Dtcoffee < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :description, :roast, :roaster_id, :weight, :price,  presence: true
    validates  :flavors, presence: true
    # has_one_attached :photo
    belongs_to :roaster,
    foreign_key: :roaster_id,
    class_name: :Roaster,
    dependent: :destroy
end
