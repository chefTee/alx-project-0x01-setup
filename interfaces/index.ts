export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Nested interface for geographic coordinates
export interface GeoProps {
  lat: string;
  lng: string;
}

// Nested interface for address
export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

// Nested interface for company
export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Main user interface
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
// interfaces/index.ts

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newUser: UserData) => void;
}
