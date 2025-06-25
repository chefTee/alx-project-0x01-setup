import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-lg font-bold">
            {name.charAt(0)}
          </div>
          <span className="text-sm opacity-75">ID: {id}</span>
        </div>
        <h2 className="text-xl font-bold mt-3">{name}</h2>
        <p className="text-blue-100">@{username}</p>
      </div>

      {/* Contact Information */}
      <div className="p-6">
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm truncate">{email}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5.5V3z" />
            </svg>
            <span className="text-sm">{phone}</span>
          </div>

          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">{website}</span>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">📍 Address</h3>
          <p className="text-sm text-gray-600">
            {address.street}, {address.suite}
          </p>
          <p className="text-sm text-gray-600">
            {address.city} {address.zipcode}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Coordinates: {address.geo.lat}, {address.geo.lng}
          </p>
        </div>

        {/* Company Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">🏢 Company</h3>
          <p className="text-sm font-medium text-gray-800">{company.name}</p>
          <p className="text-xs text-blue-600 italic mb-1">"{company.catchPhrase}"</p>
          <p className="text-xs text-gray-500">{company.bs}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-4">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;