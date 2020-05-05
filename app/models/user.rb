# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, presence:true, uniqueness:true
    validates :session_token, :password_digest, presence:true
    validates :password, length:{ minimum: 6 }, allow_nil:true
    before_validation :ensure_session_token
    attr_reader :password

    has_one :taste_profile,
        foreign_key: :user_id,
        class_name: :TasteProfile
    has_many :matches,
    foreign_key: :user_id,
    class_name: :Match

    has_many :matched_coffees,
    through: :matches,
    source: :dtcoffee

    has_one :cart,
    foreign_key: :user_id,
    class_name: :Cart

    has_many :carted_coffees,
    through: :carts,
    source: :cart_items

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user :nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
