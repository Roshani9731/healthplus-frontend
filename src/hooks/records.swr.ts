import useSWR from "swr";
import API_CONSTANTS from "@/utils/apiConstants";
import { genericAPIFetcher } from "@/utils/helpers/swr.helper";
import { ICase } from "@/app/interfaces/ICase";
type props = [
  url: string,
  type: "get" | "post" | "put" | "delete",
  rest: any[]
];
export function useRecords(page: number, limit: number) {
  const { data, error, isLoading } = useSWR(
    [API_CONSTANTS.GET_ALL_CASES, "get", { params: { page, limit } }],
    genericAPIFetcher as any
  );

  return {
    recordsData: data?.data?.cases as ICase[],
    totalRecordsCount: (data?.data?.count || 0) as number,
    isRecordsDataLoading: isLoading as boolean,
    errorFetchingRecordsData: error,
  };
}

export function useRecord(recordId: string) {
  const { data, error, isLoading, mutate } = useSWR(
    [API_CONSTANTS.GET_CASE_DATA(recordId), "get"],
    genericAPIFetcher as any
  );

  return {
    recordData: data?.data as ICase,
    isRecordDataLoading: isLoading as boolean,
    errorFetchingRecordData: error,
    mutateRecordData: mutate,
  };
}

export function useAnalytics(timeframe: string, type: string) {
  const { data, error, isLoading, mutate } = useSWR(
    [
      API_CONSTANTS.GET_ANALYTICS,
      "get",
      {
        params: {
          timeframe,
          type,
        },
      },
    ],
    genericAPIFetcher as any
  );

  return {
    analytiicsData: data?.data as {
      label: string;
      count: string;
    }[],
    isAnalyticsDataLoading: isLoading as boolean,
    errorFetchingAnalyticsData: error,
  };
}

export function useQuickStats() {
  const { data, error, isLoading } = useSWR(
    [API_CONSTANTS.GET_STATS, "get"],
    genericAPIFetcher as any
  );

  return {
    quickStatsData: data?.data as {
      [key: string]: number;
    },
    isQuickStatsDataLoading: isLoading as boolean,
    errorFetchingQuickStatsData: error,
  };
}
