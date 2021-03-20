using System.Linq;
using AutoMapper;
using API.DTOs;
using API.Entities;
using API.Extensions;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(
                    destiny => destiny.PhotoUrl,
                    options => options.MapFrom(
                        source => source.Photos.FirstOrDefault(photo => photo.IsMain).Url
                    ))
                .ForMember(
                    destiny => destiny.Age,
                    options => options.MapFrom(
                        source => source.DateOfBirth.CalculateAge()
                    ));
            CreateMap<Photo, PhotoDto>();
        }
    }
}