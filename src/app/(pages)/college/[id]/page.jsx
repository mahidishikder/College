import { ObjectId } from "mongodb";
import clientPromise from "@/lib/dbClient";
import Link from "next/link";

async function getCollegeDetails(id) {
  const client = await clientPromise;
  const db = client.db("collegeDB");
  const collection = db.collection("colleges");

  const college = await collection.findOne({ _id: new ObjectId(id) });
  return college;
}

export default async function CollegeDetailsPage({ params }) {
  const { id } = params;
  const college = await getCollegeDetails(id);

  if (!college) {
    return <div className="text-center mt-10">College not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-emerald-50 my-16">
      <h1 className="text-4xl font-bold">{college.name}</h1>

      {college.image && (
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      )}

      <DetailsSection title="Admission Dates" content={college.admissionDates} />
      <DetailsSection title="Events" content={college.events} />
      <DetailsSection title="Research History" content={college.researchHistory} />
      <DetailsSection title="Sports" content={college.sports} />
      <DetailsSection title="Rating" content={`⭐ ${college.rating}`} />

      <div className="text-center mt-10">
        <Link href={`/admission?collegeId=${college._id}&collegeName=${encodeURIComponent(college.name)}`}>
          <button className="px-6 py-3 bg-[#3DB371] text-white rounded-lg hover:bg-[#3db370a1] transition">
            Apply for Admission
          </button>
        </Link>
      </div>
    </div>
  );
}

function DetailsSection({ title, content }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-1">{title}:</h2>
      <p className="text-gray-700">{content || "Not available"}</p>
    </div>
  );
}
