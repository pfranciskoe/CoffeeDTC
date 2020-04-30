# == Schema Information
#
# Table name: dtcoffees
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  description   :text             not null
#  roast         :integer          not null
#  roaster_id    :integer          not null
#  weight        :integer          not null
#  price         :float            not null
#  single_origin :boolean          not null
#  fair_trade    :boolean          not null
#  image_link    :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class DtcoffeeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
