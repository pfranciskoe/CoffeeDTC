# == Schema Information
#
# Table name: roasters
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  location    :string           not null
#  lat         :float
#  lng         :float
#  description :string           not null
#  fun_fact    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class RoasterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
