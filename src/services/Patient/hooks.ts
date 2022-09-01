import { useQuery, UseQueryResult } from  '@tanstack/react-query';
import { PatientDto } from './dtos/Patient.dto';
import { fetchPatientList, fetchPatientById} from './service';
import { IProfessionalId, IProfessionalIdAndPatient } from '../Profissional/dtos/IProfessional';

export function usePatientList(id:IProfessionalId): UseQueryResult<PatientDto[]> {
    const queryKey = ['patientList'];
    return useQuery(queryKey, () => fetchPatientList(id), {
      keepPreviousData: true,
    });
  }


  export function usePatientById({patientId, professionalId}: IProfessionalIdAndPatient): UseQueryResult<PatientDto> {
    const queryKey = ['patientById'];
    return useQuery(queryKey, () => fetchPatientById({professionalId, patientId}), {
      keepPreviousData: true,
    });
  }
