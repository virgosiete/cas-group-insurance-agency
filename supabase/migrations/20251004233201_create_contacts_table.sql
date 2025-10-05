/*
  # Create contacts table for CAS Group website

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Full name of the person submitting the form
      - `email` (text) - Email address for contact
      - `business_type` (text) - Type of business (coaching, consulting, agency, etc.)
      - `message` (text) - Message content from the contact form
      - `created_at` (timestamptz) - Timestamp of form submission

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting new contact submissions (public access for form submissions)
    - Add policy for authenticated admin users to read contact submissions

  3. Important Notes
    - The contacts table stores all form submissions from the website
    - Public users can only insert (submit forms), not read existing submissions
    - Only authenticated users (admins) can read the contact data
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
